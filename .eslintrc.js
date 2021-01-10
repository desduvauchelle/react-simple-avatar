module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true
	},
	parser: "babel-eslint",
	extends: [
		"eslint:recommended"
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly"
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2018,
		sourceType: "module"
	},
	plugins: [
		"babel",
		"react"
	],
	rules: {
		"template-curly-spacing": "off",
		"indent": [
			"error",
			"tab",
			{
				"ignoredNodes": [
					"TemplateLiteral"
				],
				"SwitchCase": 1,
				"outerIIFEBody": 1,
				"MemberExpression": 1,
				"ArrayExpression": 1,
				"ObjectExpression": 1,
				"ImportDeclaration": 1
			}
		],
		"object-property-newline": [
			"warn",
			{
				"allowAllPropertiesOnSameLine": true
			}
		],
		"array-callback-return": 0,
		"no-undef": 2,
		"no-undefined": 0,
		"no-unused-vars": [
			"warn",
			{
				"varsIgnorePattern": "React"
			}
		],
		quotes: [
			"error",
			"backtick"
		],
		"camelcase": [
			"error",
			{
				allow: []
			}
		],
		semi: [
			"error",
			"never"
		],
		"comma-dangle": 1,
		// "comma-spacing": [
		//     "error",
		//     {
		//         before: false,
		//         after: true
		//     }
		// ],
		"react/jsx-max-props-per-line": [
			2,
			{
				maximum: 3,
				when: "always"
			}
		],
		"react/jsx-no-duplicate-props": "error",
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": "error",
		"import/export": 0
	}
}