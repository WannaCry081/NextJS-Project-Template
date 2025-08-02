import type { Metadata } from "next";
import { APP_URL } from "@/constants/env";

// Define constants for metadata
const DEFAULT_TITLE = "NextJS Project Template";
const DEFAULT_DESCRIPTION = "A Next.js project template";

export const defaultMetadata: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  metadataBase: new URL(APP_URL),
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: APP_URL,
    siteName: DEFAULT_TITLE,
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [],
  },
  alternates: {
    canonical: APP_URL,
    languages: {
      en: `${APP_URL}/en`,
    },
  },
  keywords: [],
};

export const createMetadata = (override: Partial<Metadata>) => {
  return {
    ...defaultMetadata,
    ...override,
    openGraph: {
      ...defaultMetadata.openGraph,
      ...override.openGraph,
    },
    twitter: {
      ...defaultMetadata.twitter,
      ...override.twitter,
    },
    alternates: {
      ...defaultMetadata.alternates,
      ...override.alternates,
    },
  };
};
