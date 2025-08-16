"use client";

import { useRouter } from "nextjs-toploader/app";
import { Inter } from "next/font/google";
import { ArrowLeftIcon } from "lucide-react";

// UI components
import { Button } from "@/components/ui/button";

// Styles
import "./globals.css";

// TODO: Change it to poppins font
const inter = Inter({ subsets: ["latin"] });

export default function GlobalNotFound() {
  const router = useRouter();

  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="h-dvh w-screen inline-flex items-center justify-center p-4">
          <section className="flex flex-col md:flex-row items-start justify-center gap-2 md:gap-4">
            <span className="md:text-xl font-semibold px-3.5 py-1 bg-muted-foreground/5 rounded-sm">
              404
            </span>
            <div className="space-y-4">
              <div className="space-y-1">
                <h1 className="text-3xl font-extrabold">Page not found</h1>
                <p className="text-muted-foreground text-sm">
                  The page you are looking for does not exist.
                </p>
              </div>
              <Button onClick={() => router.back()} size="sm">
                <ArrowLeftIcon className="size-4" />
                Go Back
              </Button>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
