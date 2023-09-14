import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['var(--font-titillium-web)'],
        'source-serif': ['var(--font-source-serif-4)'],
        'merriweather-sans': ['var(--font-merriweather-sans)'],
        'source-sans': ['var(--font-source-sans-pro)'],
      },
    },
  },
  plugins: [],
};

export default config;
