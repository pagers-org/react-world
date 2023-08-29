import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
    "storybook-addon-next",
  ],
  // env: (config) => ({
  //   ...config,
  //   NEXT_PUBLIC_STORAGE: process.env.NEXT_PUBLIC_STORAGE as string,
  // }),
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    if (config.resolve && config.resolve.alias) {
      config.resolve.alias["@"] = path.resolve(__dirname, "../src/");
    }

    return config;
  },
};
export default config;
