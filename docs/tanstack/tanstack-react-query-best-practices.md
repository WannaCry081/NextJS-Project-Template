# TanStack React Query Best Practices

## Overview

This document covers best practices for using TanStack Query in a React project. It focuses on organizing query options, prefetching for pagination, structuring query key factories, and handling mutations.

## Table of Contents

- [Overview](#overview)
- [Query Options Function](#query-options-function)
- [Prefetching for Pagination](#prefetching-for-pagination)
- [Query Key Factories](#query-key-factories)
- [Mutations](#mutations)
- [References](#references)

## Query Options Function

- Always create a function that returns your query options instead of a custom hook.
- Always pass query parameters as part of your query keys to ensure proper caching and refetching.

**Example:**

```jsx
import { queryOptions } from "@tanstack/react-query";
import { client } from "@/services";

export const getContacts = (page, data) =>
  queryOptions({
    queryKey: ["generalKey", { page }, { data }],
    queryFn: async () => await client.getFetch(page, data),
  });

export default async function Page() {
  return (
    <Suspense fallback={<Skeleton />}>
      <ContactList />
    </Suspense>
  );
}

export const ContactList = () => {
  // Usage with useSuspenseQuery
  useSuspenseQuery({
    ...getContacts(page, data),
    select: () => {}, // Custom select method
  });
};
```

## Prefetching for Pagination

- Use `queryClient.prefetchQuery()` to prefetch data for the next page during pagination.

**Example:**

```jsx
const [page, setPage] = useState(1);
const queryClient = useQueryClient();

useEffect(() => {
  queryClient.prefetchQuery(getSampleQueryOptions(page + 1, 50));
}, [queryClient, page]);
```

## Query Key Factories

- Use query key factory functions to maintain consistent and scalable key structures.

**Example:**

```jsx
const queryKeys = {
  all: () => ["contacts"],
  getContacts: (page, data) => [...queryKeys.all(), { page }, { data }],
};
```

## Mutations

- Use a mutation hook to handle create, update, or delete actions.
- Always invalidate relevant queries after a mutation to keep data in sync.

**Example:**

```jsx
export const useDeleteContact = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => client.deleteContact(),
    onSuccess: () => {
      // Show toast or notification
    },
    onError: () => {
      // Show error notification
    },
    onSettled: () => {
      // Invalidate query here
      queryClient.invalidateQueries({ queryKey: queryKeys.all() });
    },
  });
};
```

## References

- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [React Query Patterns](https://www.youtube.com/watch?v=9Vuz4BbPkXc)
