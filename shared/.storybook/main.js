const path = require('path')

module.exports = {
  'stories': [
    '../src/test/**/*.stories.@(js|mdx)',
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],
  // webpackFinal: async (config) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@dev': path.resolve(__dirname, '../dev'),
  //     '@components': path.resolve(__dirname, '../src/components'),
  //     '@containers': path.resolve(__dirname, '../src/containers'),
  //     '@contexts': path.resolve(__dirname, '../src/contexts'),
  //     '@hooks': path.resolve(__dirname, '../src/hooks'),
  //     '@utils': path.resolve(__dirname, '../src/utils'),
  //   }

  //   config.module.rules.push({
  //     test: /\.ya?ml$/,
  //     type: 'json', // Required by Webpack v4
  //     use: 'yaml-loader',
  //   })

  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: ['style-loader', 'css-loader?modules=true'],
  //     include: path.resolve(__dirname, '../components'),
  //   })

  //   return config
  // }
}
