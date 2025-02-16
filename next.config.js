/** @type {import('next').NextConfig} */

const nextConfig = {
  compress: true,
  experimental: {
    inlineCss: true,
  },
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/storybook",
        destination: "/storybook/index.html", // will run ./public/storybook/index.html
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
// export default nextConfig;
