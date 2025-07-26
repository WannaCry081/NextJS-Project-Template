import NextTopLoader from "nextjs-toploader";
import React, { PropsWithChildren } from "react";

// Shadcn components
import { TooltipProvider } from "../ui/tooltip";
import { Toaster } from "../ui/sonner";

// UIProvider components encapsulate all UI-related context providers
export const UIProvider = ({ children }: PropsWithChildren) => {
  return (
    <React.Fragment>
      <NextTopLoader showSpinner={false} />
      <Toaster />

      <TooltipProvider>{children}</TooltipProvider>
    </React.Fragment>
  );
};
