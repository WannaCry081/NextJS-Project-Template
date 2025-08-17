/*
 * Handles global loading throughout the app,
 * including route changes and data fetching.
 * You can update the loading spinner as needed.
 */

export default function Loading() {
  return (
    <div className="min-h-dvh bg-background flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="size-12 border-4 border-muted rounded-full animate-spin border-t-primary" />
      </div>
    </div>
  );
}
