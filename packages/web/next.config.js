const createVanillaExtractPlugin =
  require('@vanilla-extract/next-plugin').createVanillaExtractPlugin
const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ hash }) => `prefix_${hash}`,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.imgur.com'],
  },
}
module.exports = withVanillaExtract(nextConfig)
