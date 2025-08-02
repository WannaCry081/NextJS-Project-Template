import { NextAuthOptions } from "next-auth";

// Constants
import { NEXTAUTH_SECRETS, NEXTAUTH_MAX_AGE } from "@/constants/env";

// Authentication providers
import { AuthProviders } from "./auth-providers";

export const authOptions: NextAuthOptions = {
  providers: AuthProviders,
  secret: NEXTAUTH_SECRETS,

  // Session configuration
  session: {
    strategy: "jwt",
    maxAge: NEXTAUTH_MAX_AGE,
  },

  // Custom pages for sign-in and sign-out
  pages: {
    signIn: "/login",
  },

  // Callbacks for session and JWT handling
  callbacks: {
    // TODO: Uncomment and implement the session callback if needed
    // Called whenever a session is checked or created. Customize the session object here.
    // async session({ session, token, user }) {
    //   // You can modify the session object here if needed
    //   return session;
    // },
    // TODO: Uncomment and implement the JWT callback if needed
    // Called whenever a JWT is created or updated. Customize the token here.
    // async jwt({ token, user, account, profile }) {
    //   // You can modify the token object here if needed
    //   return token;
    // },
  },
};
