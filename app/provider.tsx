import { PropsWithChildren } from "react";

// Providers
import { ThemeProvider } from "@/components/providers/theme-provider";
import { UIProvider } from "@/components/providers/ui-provider";
import { TanstackProvider } from "@/components/providers/tanstack-provider";

export const Provider = ({ children }: PropsWithChildren) => {
  return (
    <TanstackProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <UIProvider>{children}</UIProvider>
      </ThemeProvider>
    </TanstackProvider>
  );
};
