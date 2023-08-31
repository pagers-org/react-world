// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');

const withVE = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withVE(nextConfig);
