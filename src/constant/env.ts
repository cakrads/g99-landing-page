// Canonical public URL — single source of truth for ALL SEO output
// (metadataBase, canonical, og:url, OG images, JSON-LD, sitemap, robots).
// Must NEVER follow the deployment hostname: the Vercel env var
// NEXT_PUBLIC_HOST_URL was set to https://laundryg99.vercel.app, which made
// Google index the vercel.app copy instead of laundryg99.com.
// HOST_URL is pinned to SITE_URL on purpose; do not read the env var back.
export const SITE_URL = "https://laundryg99.com";
export const HOST_URL = SITE_URL;

export const SELF_API = process.env.NEXT_PUBLIC_SELF_API ?? "";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
