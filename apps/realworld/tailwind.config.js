const base = require('@packages/tailwindcss-config/base.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  theme: {
    ...base.theme,
    extend: {
      ...base.theme.extend,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
