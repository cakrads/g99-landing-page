/** @type {import('next').NextConfig} */

const nextConfig = {
  compress: true,
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
