# SSR (Server-Side Rendering) in Next.js App Router with Axios and TanStack React Query

## Overview

This document explains what SSR is, why it’s valuable, and how to implement true server-side rendering in a Next.js App Router (v15) project using Axios and TanStack React Query.  
It also provides a working code example and analysis of each part of the implementation.

## Table of Contents

- [Overview](#overview)
- [What Is SSR and Why Use It](#what-is-ssr-and-why-use-it)
- [SSR in Pages Router vs. App Router](#ssr-in-pages-router-vs-app-router)
- [SSR Example: App Router + Axios + TanStack React Query](#ssr-example-app-router--axios--tanstack-react-query)
- [How It Works](#how-it-works)
- [References](#references)

## What Is SSR and Why Use It

**Server-Side Rendering (SSR)** means generating the HTML for a page on the server for every request, sending fully-formed HTML to the client.  
This allows the browser, bots, and crawlers to see content immediately, even before client-side JavaScript runs.

**Benefits:**

- **SEO & Social Sharing:** Content is visible to bots/crawlers instantly.
- **Performance for First Load:** Faster first paint for users, especially on slow networks.

## SSR in Pages Router vs. App Router

**Pages Router:**

- Implement SSR with `export async function getServerSideProps()` in your page file.
- Runs per request and hydrates your React component with returned props.

**App Router (v13+ / v15):**

- Moves away from `getServerSideProps`.
- By default, routes are statically rendered (SSG) or updated via ISR.
- To enable SSR:
  - Add `export const dynamic = 'force-dynamic'` to your route segment.
  - Or use `fetch(..., { cache: 'no-store' })` or `{ next: { revalidate: 0 } }` in your data-fetch calls.

## SSR Example: App Router + Axios + TanStack React Query

Here is a minimal project structure and working example using SSR with Axios and TanStack React Query v5 in Next.js App Router v15.

```

├── services
│   └── post.ts
└── app
    └── posts
      ├── loading.tsx
      ├── error.tsx
      ├── page.tsx
      └── PostsClient.tsx

```

### services/post.ts

```ts
import axiosInstance from "@/config/axios.config";

export const postService = {
  getPost: () =>
    axiosInstance.get("https://jsonplaceholder.typicode.com/posts"),
};
```

### app/posts/loading.tsx

```tsx
export default function Loading() {
  return <p>Loading posts…</p>;
}
```

### app/posts/error.tsx

```tsx
"use client";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => console.error("Posts error:", error), [error]);
  return <p>Sorry, we couldn’t load posts right now.</p>;
}
```

### app/posts/page.tsx

```tsx
import {
  QueryClient,
  dehydrate,
  Hydrate,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Suspense } from "react";
import { getPosts } from "@/services/post";

import Loading from "./loading";
import Error from "./error";

import PostsClient from "./PostsClient";

export const dynamic = "force-dynamic";

export default async function PostsPage() {
  // 1) Create QueryClient with suspense enabled
  const queryClient = new QueryClient({
    defaultOptions: { queries: { suspense: true } },
  });

  // 2) Prefetch on the server
  await queryClient.prefetchQuery(["posts"], getPosts);

  // 3) Serialize the cache
  const dehydratedState = dehydrate(queryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>
        {/* 4) Wrap in Suspense to use useSuspenseQuery */}
        <Suspense fallback={<Loading />}>
          <PostsClient />
        </Suspense>
      </Hydrate>
    </QueryClientProvider>
  );
}
```

### app/posts/PostsClient.tsx

```tsx
"use client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getPosts } from "@/lib/api";

export default function PostsClient() {
  // This will suspend while loading, and throw on error
  const { data: posts } = useSuspenseQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.id} className="p-4 border rounded">
          <h3 className="font-bold">{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
```

## How It Works

1. **Server-side prefetch and dehydrate:**
   In `page.tsx`, create a `QueryClient` with `{ suspense: true }`, prefetch the `['posts']` query, then serialize with `dehydrate()`.

2. **Inline provider and hydrate:**
   In the same server component, wrap your client UI in `<QueryClientProvider>` and `<Hydrate>` so the client picks up the cache without a refetch.

3. **Suspense for loading state:**
   Wrap `<PostsClient />` in `<Suspense>` to suspend the component while loading, showing the `<Loading />` fallback.

4. **Error handling:**
   Any error thrown by `useSuspenseQuery` will propagate. Use a React error boundary or rely on Next.js’s `error.tsx` in your route segments to handle errors gracefully.

**Result:**
You get true per-request SSR, Axios for HTTP requests, TanStack Query caching both server and client, and the simplicity of `useSuspenseQuery` for fetching data.

## References

- [Next.js App Router: Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions)
- [TanStack Query Documentation](https://tanstack.com/query/v5/docs/react/guides/ssr)
