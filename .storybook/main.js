module.exports = {
   stories: ['../**/*.story.mdx', '../**/*.story.@(js|jsx|ts|tsx)'],
   addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/addon-interactions',
      '@storybook/addon-postcss',
      'storybook-addon-next',
   ],
   framework: '@storybook/react',
   core: {
      builder: '@storybook/builder-webpack5',
   },
};
