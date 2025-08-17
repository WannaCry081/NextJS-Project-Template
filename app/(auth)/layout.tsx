import React, { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-background">
      <section className="flex flex-1 items-center justify-center w-full">
        <div className="w-full max-w-md px-4">{children}</div>
      </section>

      <footer className="w-full py-4 px-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} WannaCry081. All rights reserved.
      </footer>
    </main>
  );
}
