/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@packages/ui'],
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
