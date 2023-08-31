module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        selector: ['variable'],
      },
      {
        format: ['camelCase', 'PascalCase'],
        selector: ['parameter', 'function'],
      },
      {
        format: ['PascalCase'],
        selector: 'typeLike',
      },
    ],
    'react/function-component-definition': [
      2,
      { namedComponents: 'function-declaration' },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
