module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'prettier',
    'prettier/prettier',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: ['react', '@typescript-eslint', 'tailwindcss'],
  rules: {
    indent: 'off',
    '@typescript-eslint/no-var-requires': 0,
    'react/self-closing-comp': 'warn', // 셀프 클로징 태그 가능하면 적용
    'no-console': 'warn',
  },
}
