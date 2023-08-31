import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVE = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default withVE(nextConfig);

