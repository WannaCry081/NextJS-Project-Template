function getEnvVar(k: keyof NodeJS.ProcessEnv): string {
  const v = process.env[k];
  if (!v) {
    throw new Error(`Missing environment variable: ${k}`);
  }
  return v;
}

// Environment variables
export const API_URL = getEnvVar("NEXT_PUBLIC_API_URL");
export const BASE_URL = getEnvVar("NEXT_PUBLIC_BASE_URL");
