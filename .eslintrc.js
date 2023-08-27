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
		'eslint-plugin-simple-import-sort',
		'unused-imports'
	],
	rules: {
		"no-console": "error",
		"prettier/prettier": "error",
		"unused-imports/no-unused-imports": "error",
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"@typescript-eslint/prefer-optional-chain": "error",

	  }
};
