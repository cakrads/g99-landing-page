// Single source of truth for all SEO URLs (metadataBase, canonical, og:url,
// OG images, JSON-LD, sitemap, robots): NEXT_PUBLIC_HOST_URL.
// In production (Vercel env vars) it must be the canonical domain — never a
// *.vercel.app deployment hostname, or Google will index the vercel.app copy.
// No hardcoded domain in code: every consumer reads HOST_URL from here.
export const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL ?? "";

export const SELF_API = process.env.NEXT_PUBLIC_SELF_API ?? "";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
