module.exports = {
  "stories": [
	  "../**/*.story.mdx",
    "../stories/**/*.stories.mdx",
	"../**/*.story.@(js|jsx|ts|tsx)",
	"../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
	"@storybook/addon-postcss",
	"storybook-addon-next",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  resolve: {
	extensions: ['.js', '.jsx', '.ts', '.tsx'],
	modules: ['../', 'node_modules'],
 },
//  webpackFinal: async (config) => {
// 	config.resolve.alias = {
// 	   ...config.resolve.alias,
// 	   '@': path.resolve(__dirname, '../'),
// 	   '@components': path.resolve(__dirname, '..', 'app/[lang]/components/'),
// 	   '@config': path.resolve(__dirname, '..', 'config/'),
// 	   '@assets': path.resolve(__dirname, '..', 'assets/'),
// 	   '@constant': path.resolve(__dirname, '..', 'constant/'),
// 	   '@dictionaries': path.resolve(
// 		  __dirname,
// 		  '..',
// 		  'app/[lang]/dictionaries/',
// 	   ),
// 	   '@providers': path.resolve(__dirname, '..', 'providers/'),
// 	   '@types': path.resolve(__dirname, '..', 'types/'),
// 	};

// 	return config;
//  },
}