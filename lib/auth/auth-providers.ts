import CredentialsProvider from "next-auth/providers/credentials";

// TODO: Uncomment and configure the OAuth providers when needed
// import GithubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";

// Constants
// TODO: Uncomment and configure the OAuth providers when needed
// import {
//   GITHUB_CLIENT_ID,
//   GITHUB_CLIENT_SECRET,
//   GOOGLE_CLIENT_ID,
//   GOOGLE_CLIENT_SECRET,
// } from "@/constants/env";

export const AuthProviders = [
  // Credentials provider for email/password authentication
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: {
        label: "Email",
        type: "text",
      },
      password: {
        label: "Password",
        type: "password",
      },
    },

    // TODO: Remove eslint disable when implementing the function
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async authorize(credentials, request) {
      return null;
    },
  }),

  // TODO: Uncomment and configure GitHub OAuth provider when needed
  // GithubProvider({
  //   clientId: GITHUB_CLIENT_ID,
  //   clientSecret: GITHUB_CLIENT_SECRET,
  //   async profile(profile, tokens) {
  //     // Map the GitHub profile to the User object expected by NextAuth
  //     return {
  //       id: profile.id?.toString() ?? "",
  //       name: profile.name ?? profile.login ?? "",
  //       email: profile.email ?? "",
  //       image: profile.avatar_url ?? "",
  //     };
  //   },
  // }),

  // TODO: Uncomment and configure Google OAuth provider when needed
  // GoogleProvider({
  //   clientId: GOOGLE_CLIENT_ID,
  //   clientSecret: GOOGLE_CLIENT_SECRET,
  //   async profile(profile, tokens) {
  //     // Map the Google profile to the User object expected by NextAuth
  //     return {
  //       id: profile.id?.toString() ?? "",
  //       name: profile.name ?? "",
  //       email: profile.email ?? "",
  //       image: profile.picture ?? "",
  //     };
  //   },
  // }),
];
