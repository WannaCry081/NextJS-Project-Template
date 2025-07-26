"use client";

import { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const TanstackProvider = ({ children }: PropsWithChildren) => {
  /*
    Enclose the QueryClient in a useState hook to ensure 
    that in every render, you'll get a brand new instance, 
    which will clear all your cache and refetch everything.
  */
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
