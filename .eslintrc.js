// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // 뒤로 갈수록 뒤의 설정이 앞을 뒤덮음
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended', 'airbnb', 'airbnb-typescript'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    eqeqeq: ['error', 'always'], // === !== 만 사용하도록 규제
    'no-console': 'warn', // console문 warning 표시, TSconfig에도 존재하나 eslint를 통해 ide상에서 가시적으로 표시 가능할 듯
    curly: 'error', // if문 while문에서 curly bracket 사용
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
  },
};
