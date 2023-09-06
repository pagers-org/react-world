module.exports = {
	parser: '@typescript-eslint/parser',
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'xo',
		'next',
		"prettier"
	],
	overrides: [
		{
			env: {
				node: true,
			},
		},
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'prettier',
		'unused-imports',
		'react-hooks',
	],
	rules: {
		"no-console": "error",
		"prettier/prettier": "error",
		"unused-imports/no-unused-imports": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
		"@typescript-eslint/prefer-optional-chain": "error",

	  }
};
