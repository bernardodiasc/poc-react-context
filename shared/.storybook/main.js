const path = require('path')

module.exports = {
  'stories': [
    '../src/components/**/*.stories.@(js|mdx)',
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    'storybook-css-modules-preset',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, '../src/components'),
      '@containers': path.resolve(__dirname, '../src/containers'),
      '@contexts': path.resolve(__dirname, '../src/contexts'),
      '@hooks': path.resolve(__dirname, '../src/hooks'),
      '@utils': path.resolve(__dirname, '../src/utils'),
    }

    return config
  }
}
