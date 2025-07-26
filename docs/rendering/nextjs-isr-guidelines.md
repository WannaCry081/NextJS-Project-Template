# Incremental Static Regeneration (ISR) with TanStack React Query: Professional Patterns

## Overview

This guide covers advanced, production-grade practices for using ISR and TanStack React Query in Next.js v15.  
It explains when to use each technique, how to centralize your provider, and where to combine SSR, ISR, and React Query for optimal maintainability and performance.

## Table of Contents

- [Overview](#overview)
- [When to Use Native Fetch vs. React Query](#when-to-use-native-fetch-vs-react-query)
- [Centralizing the QueryClient Provider](#centralizing-the-queryclient-provider)
- [Combining ISR and Prefetching](#combining-isr-and-prefetching)
- [Example: Dynamic Route with ISR + React Query](#example-dynamic-route-with-isr--react-query)
- [References](#references)

## When to Use Native Fetch vs. React Query

**Use Next.js’s built-in fetch with ISR whenever possible:**  
If you just need static data with background regeneration (read-only), rely on Next.js’s fetch cache and `revalidate` options.

```tsx
// app/posts/[id]/page.tsx (Server Component)
export const revalidate = 60;
export const dynamic = "force-static";

export default async function PostPage({ params: { id } }) {
  // Next.js will cache + ISR this automatically
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  }).then((r) => r.json());

  return <PostView post={post} />;
}
```

**Only use React Query when you need:**

- Client-side caching, mutations, or optimistic updates
- Interactive/real-time data
- Avoiding a flash of loading on navigation

## Centralizing the QueryClient Provider

For apps that require React Query globally (mutations, cache invalidation, devtools), create your `QueryClientProvider` once at the app root instead of per-page:

```tsx
// app/providers.tsx (Client Component)
"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function RootProviders({ children }) {
  const queryClient = new QueryClient({ defaultOptions: { queries: { ... } } })
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
```

## Combining ISR and Prefetching

For rarely-changing dynamic routes (like blog posts) where you want instant cache and interactive features, combine `generateStaticParams`, `revalidate`, and server-side `prefetchQuery` with hydration:

- Use React Query + hydrate only when you need client caching or mutations.
- For simple read-only pages, stick with `fetch` and ISR.

## Example: Dynamic Route with ISR + React Query

Here’s a production-ready pattern for a dynamic page using both ISR and React Query:

**lib/api.ts**

```ts
export async function getPost(id: number) {
  const res = await fetch(`https://.../posts/${id}`, {
    next: { revalidate: 60 },
  });
  return res.json();
}
```

**app/posts/\[id]/page.tsx (Server Component)**

```tsx
import { dehydrate, QueryClient, Hydrate } from "@tanstack/react-query";
import PostClient from "./PostClient";
import { getPost } from "@/lib/api";

export const dynamic = "force-static";
export const revalidate = 60;

export async function generateStaticParams() {
  const list = await fetch("https://.../posts").then((r) => r.json());
  return list.map((p: { id: number }) => ({ id: p.id.toString() }));
}

export default async function PostPage({ params: { id } }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["post", id], () => getPost(id));
  const state = dehydrate(queryClient);

  return (
    <Hydrate state={state}>
      <PostClient id={+id} />
    </Hydrate>
  );
}
```

**app/posts/\[id]/PostClient.tsx (Client Component)**

```tsx
"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getPost } from "@/lib/api";

export default function PostClient({ id }: { id: number }) {
  const { data: post } = useSuspenseQuery({
    queryKey: ["post", id],
    queryFn: () => getPost(id),
  });
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
```

**Why this is production-grade:**

- Single `QueryClientProvider` at the root avoids duplication.
- Native fetch with `revalidate` for simple ISR.
- React Query + hydrate only on interactive or client-cached routes.
- `generateStaticParams` gives you SSG for known IDs, with background ISR.

## References

- [Next.js ISR Docs](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating)
- [TanStack Query SSR/ISR Guide](https://tanstack.com/query/v5/docs/react/guides/ssr)
- [React Query Hydration](https://tanstack.com/query/v5/docs/react/guides/ssr#using-hydration)
