module.exports = {
  extends: ["sarpik"],
	rules: {
		'no-param-reassign': 0,
		'react/display-name': 'off',
		'global-require' : 0,
		'import/no-dynamic-require': 0,
		"import/no-extraneous-dependencies": 0,
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-var-requires':'off',
		'indent': 0,
		"react/destructuring-assignment": 0,
	},
	settings: {
    "import/resolver": {
			"typescript": {}
    }
	}
}