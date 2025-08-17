import { Session } from "next-auth";
import { Poppins } from "next/font/google";

// Types
import type { Metadata } from "next";

// Utils
import { cn } from "@/lib/utils";
import { defaultMetadata } from "@/lib/seo";

// Providers
import { Provider } from "./provider";

// Styles
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: Session | null;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", poppins.variable)}>
        <Provider session={session}>{children}</Provider>
      </body>
    </html>
  );
}
