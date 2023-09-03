const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = { reactStrictMode: true, transpilePackages: ["ui"] };

module.exports = {};

module.exports = withVanillaExtract(nextConfig);
