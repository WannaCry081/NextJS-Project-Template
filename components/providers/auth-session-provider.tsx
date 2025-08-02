"use client";

import { PropsWithChildren } from "react";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

interface AuthSessionProviderProps extends PropsWithChildren {
  session: Session | null;
}

export const AuthSessionProvider = ({
  children,
  session,
}: AuthSessionProviderProps) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
