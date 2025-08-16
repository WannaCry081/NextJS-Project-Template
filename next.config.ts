import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: [
      "app",
      "constants",
      "config",
      "components/shared",
      "components/providers",
      "hooks",
      "lib",
      "stores",
      "services",
      "utils",
      "types",
    ],
  },

  // TODO: Remove once Next.js supports this natively
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
