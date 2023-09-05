module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  plugins: ["unicorn"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
  },
  rules: {
    "no-console": "off",
    "no-unused-vars": "warn",
    "no-undef": "error",
    "class-methods-use-this": "off",
    "object-shorthand": ["error", "always"],
    "require-await": "off",
    curly: ["error", "all"],

    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          { pattern: "{next*,next*/**}", group: "builtin", position: "before" },
          { pattern: "{react*,react-*}", group: "builtin", position: "before" },
          { pattern: "{swr*,swr*/**}", group: "builtin", position: "before" },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
    "import/first": "error",
    "import/extensions": "off",
    "import/no-named-as-default": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",

    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-assertions": "off",
    "@typescript-eslint/no-use-before-define": [
      "warn",
      {
        functions: false,
        classes: false,
        variables: false,
        typedefs: false,
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/prefer-reduce-type-parameter": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        leadingUnderscore: "allow",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
      },
      {
        selector: "function",
        format: ["camelCase", "PascalCase"],
      },
      {
        selector: ["interface", "typeAlias", "class", "enum"],
        format: ["PascalCase"],
      },
    ],

    "react/prop-types": "off",
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",

    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
      },
    ],
  },

  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {},
    },
  },
};
