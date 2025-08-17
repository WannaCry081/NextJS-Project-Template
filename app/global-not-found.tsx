import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// Custom Component
import { NotFoundPage } from "@/components/common/not-found";

// Styles
import "./globals.css";

// Utils
import { cn } from "@/lib/utils";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={cn("antialiased", poppins.className)}>
      <body>
        <NotFoundPage />
      </body>
    </html>
  );
}
