# SEO Guidelines

## Overview

This document outlines the standards and best practices for managing SEO metadata across all pages. The goal is to ensure SEO information remains consistent, maintainable, and effective for search engine optimization.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Configuration](#configuration)
- [Codebase Examples](#codebase-examples)
- [References](#references)

## Getting Started

Each page must include specific SEO metadata. Define a unique `title`, `description`, and relevant `keywords` for every page to maximize search engine visibility.

## Usage

- Import SEO metadata from a centralized location (`constants/metadata.ts`) into each page or component.
- Reuse metadata to avoid duplication and ensure accuracy.
- Update metadata whenever page content or focus changes.

## Configuration

- Store all SEO-related constants in `constants/metadata.ts` for consistency and easier maintenance.
- Structure your metadata objects for both default and dynamic cases.

## Codebase Examples

### Default Metadata

Import `defaultMetadata` from your constants directory and use it in your `page.tsx` file as shown below:

```js
import type { Metadata } from "next";
import { defaultMetadata } from "@/constants/metadata";

export const metadata: Metadata = defaultMetadata;
```

### Dynamic Metadata

For dynamic metadata, import `createMetadata` from the same file and use it to generate metadata on each page:

```js
import type { Metadata } from "next";
import { createMetadata } from "@/constants/metadata";

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await fetchPost(params.slug);
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
  });
}
```

> [!NOTE]  
> Metadata should be implemented on every page to ensure search engine optimization.

## References

- [Next.js Metadata Documentation](https://nextjs.org/docs/app/api-reference/functions/generate-metadata)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [MDN: Meta tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
