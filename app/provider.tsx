import { PropsWithChildren } from "react";
import { Session } from "next-auth";

// Providers
import { ThemeProvider } from "@/components/providers/theme-provider";
import { UIProvider } from "@/components/providers/ui-provider";
import { TanstackProvider } from "@/components/providers/tanstack-provider";
import { AuthSessionProvider } from "@/components/providers/auth-session-provider";

interface ProviderProps extends PropsWithChildren {
  session: Session | null;
}

export const Provider = ({ children, session }: ProviderProps) => {
  const providers = [
    TanstackProvider,
    ({ children }: PropsWithChildren) => (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    ),
    UIProvider,
    ({ children }: PropsWithChildren) => (
      <AuthSessionProvider session={session}>{children}</AuthSessionProvider>
    ),
  ];

  return providers.reduceRight(
    (accumulator, ProviderComponent) => (
      <ProviderComponent>{accumulator}</ProviderComponent>
    ),
    children,
  );
};
