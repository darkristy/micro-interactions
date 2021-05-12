module.exports = {
	purge: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				mono: ["Source Code Pro", "monospace"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
