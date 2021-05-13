module.exports = {
	future: { webpack5: true },
};

const path = require("path");

const withPlugins = require("next-compose-plugins");
const withReactSvg = require("next-react-svg");

module.exports = withPlugins([
	[
		withReactSvg,
		{
			include: path.resolve(__dirname, "svg"),
			webpack: (config) => {
				// Unset client-side javascript that only works server-side
				config.resolve.fallback = { fs: false, module: false };
				return config;
			},
		},
	],
	{
		future: { webpack5: true },
	},
]);
