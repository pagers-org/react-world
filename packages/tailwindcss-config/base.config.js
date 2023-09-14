const { colors, breakpoints } = require("./theme");

const range = (start = 0, end) => {
  const arr = [];
  for (let c = start; c <= end; c++) {
    arr.push(c);
  }

  return arr;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: {
    pattern: /text-/,
  },
  theme: {
    extend: {
      colors,
      screens: breakpoints,
      inset: {
        ...range(1, 1880).reduce((acc, px) => {
          acc[`${px}`] = `${px}px`;
          return acc;
        }, {}),
      },
      width: {
        ...range(1, 1880).reduce((acc, px) => {
          acc[`${px}`] = `${px}px`;
          return acc;
        }, {}),
      },
      minWidth: {
        ...range(1, 1880).reduce((acc, px) => {
          acc[`${px}`] = `${px}px`;
          return acc;
        }, {}),
      },
      maxWidth: {
        ...range(1, 1880).reduce((acc, px) => {
          acc[`${px}`] = `${px}px`;
          return acc;
        }, {}),
      },
      maxHeight: {
        ...range(1, 1880).reduce((acc, px) => {
          acc[`${px}`] = `${px}px`;
          return acc;
        }, {}),
      },
      height: {
        ...range(1, 1880).reduce((acc, px) => {
          acc[`${px}`] = `${px}px`;
          return acc;
        }, {}),
        full: "100%",
      },
      margin: {
        auto: "auto",
        ...range(1, 1880).reduce((acc, px) => {
          acc[`${px}`] = `${px}px`;
          return acc;
        }, {}),
      },
      padding: {
        auto: "auto",
        ...range(1, 1880).reduce((acc, px) => {
          acc[`${px}`] = `${px}px`;
          return acc;
        }, {}),
      },
      borderWidth: {
        ...range(1, 16).reduce((acc, px) => {
          acc[`${px}`] = `${px}px`;
          return acc;
        }, {}),
      },
      gap: {
        ...range(1, 240).reduce((acc, px) => {
          acc[`${px}`] = `${px}px`;
          return acc;
        }, {}),
      },
    },
  },
};
