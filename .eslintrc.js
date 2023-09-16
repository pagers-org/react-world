module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: ['xo', 'next/core-web-vitals', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			"jsx": true
		},
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'prettier',
		'unused-imports',
		'react-hooks',
	],

	rules: {
		"no-console": "warn",
		'new-cap': 'off',
		"prettier/prettier": "off",
		"unused-imports/no-unused-imports": "error",
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		"react/destructuring-assignment": "warn",
		"react/no-direct-mutation-state": "warn",
		"react/no-unused-state": "warn",
		"react/self-closing-comp": "warn",
	}
};
