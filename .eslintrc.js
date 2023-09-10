module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-undef': 0,
    'prettier/prettier': 2, // Means error
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off', // TypeScript 에서  이미 컴포넌트의 props를 검증하기 위해 타입 체크를 제공
    '@typescript-eslint/consistent-type-exports': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
