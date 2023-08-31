const path = require("path");

const buildEslintCommand = filenames => {
  const files = filenames.map(f => path.relative(process.cwd(), f)).join(" ");
  return `eslint ${files}`;
};

const buildPrettierCommand = filenames => {
  const files = filenames.map(f => path.relative(process.cwd(), f)).join(" ");
  return `prettier --check ${files} --plugin=prettier-plugin-astro`;
};

module.exports = {
  "*.{js,jsx,ts,tsx,json,astro}": [buildEslintCommand, buildPrettierCommand],
};
