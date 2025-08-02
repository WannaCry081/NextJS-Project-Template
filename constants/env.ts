/**
 * Retrieves a required environment variable or throws an error if it's missing.
 * Ensures that critical configuration is always defined at runtime.
 *
 * @param {keyof NodeJS.ProcessEnv} k - The name of the environment variable to retrieve.
 * @returns {string} The value of the environment variable.
 * @throws {Error} If the environment variable is not defined.
 */
function getEnvVar(k: keyof NodeJS.ProcessEnv): string {
  const v = process.env[k];
  if (!v) {
    throw new Error(`Missing environment variable: ${k}`);
  }
  return v;
}

// NextJS Environment Variables
export const API_URL = getEnvVar("NEXT_PUBLIC_API_URL");
export const APP_URL = getEnvVar("NEXT_PUBLIC_APP_URL");

// NextAuth Credentials
export const NEXTAUTH_SECRETS = getEnvVar("NEXTAUTH_SECRETS");
export const NEXTAUTH_MAX_AGE = parseInt(getEnvVar("NEXTAUTH_MAX_AGE"), 10);

// GitHub OAuth Credentials
// TODO: Uncomment and set your OAuth credentials if needed
// export const GITHUB_CLIENT_ID = getEnvVar("GITHUB_CLIENT_ID");
// export const GITHUB_CLIENT_SECRET = getEnvVar("GITHUB_CLIENT_SECRET");

// Google OAuth Credentials
// TODO: Uncomment and configure the OAuth providers when needed
// export const GOOGLE_CLIENT_ID = getEnvVar("GOOGLE_CLIENT_ID");
// export const GOOGLE_CLIENT_SECRET = getEnvVar("GOOGLE_CLIENT_SECRET");
