/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
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
