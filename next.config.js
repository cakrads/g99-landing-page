/** @type {import('next').NextConfig} */

const nextConfig = {
  compress: true,
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        // Canonical-domain redirect: the Vercel deployment hostname must never
        // serve indexable content. Without this, laundryg99.vercel.app returns
        // 200 with identical content and Google indexes it instead of
        // laundryg99.com (canonical + sitemap alone were not enough, because
        // the env var feeding them pointed at vercel.app).
        // Matches ONLY the exact vercel.app host — preview deployments
        // (g99-landing-page-*.vercel.app) are unaffected.
        source: "/:path*",
        has: [{ type: "host", value: "laundryg99.vercel.app" }],
        destination: "https://laundryg99.com/:path*",
        permanent: true, // 308
      },
      {
        source: "/storybook",
        destination: "/storybook/index.html", // will run ./public/storybook/index.html
        permanent: false,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
// export default nextConfig;
