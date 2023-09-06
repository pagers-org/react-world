const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.realworld.io'],
  },

  reactStrictMode: true,
};

module.exports = withVanillaExtract(nextConfig);
