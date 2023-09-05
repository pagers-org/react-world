import path from 'path';
import type { StorybookConfig } from '@storybook/nextjs';
import { VanillaExtractPlugin } from '@vanilla-extract/webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config, options) => {
    config.plugins?.push(
      new VanillaExtractPlugin(),
      new MiniCssExtractPlugin(),
    );

    config.module?.rules?.forEach((rule: any) => {
      if (
        typeof rule !== 'string' &&
        rule.test instanceof RegExp &&
        rule.test.test('test.css')
      ) {
        rule.exclude = /\.vanilla\.css$/i;
      }
    });

    config.module?.rules?.push({
      test: /\.vanilla\.css$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: require.resolve('css-loader'),
          options: {
            url: false,
          },
        },
      ],
    });

    const imageRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test;

      if (!test) {
        return false;
      }

      return test.test('.svg');
    }) as { [key: string]: any };

    imageRule.exclude = /\.svg$/;

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/src': path.resolve(__dirname, '../src'),
        '@/app': path.resolve(__dirname, '../app'),
      };
    }

    return config;
  },
};
export default config;
