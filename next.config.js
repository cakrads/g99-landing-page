/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'laundryg99.com', // Or the actual hostname
        port: '',
        pathname: '/_next/image/**',
      },
    ],
  },
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
