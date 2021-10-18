const path = require('path')

const withTM = require('next-transpile-modules')(['../shared'])

module.exports = withTM({
  reactStrictMode: false,
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@dev': path.resolve(__dirname, '../shared/dev'),
      '@components': path.resolve(__dirname, '../shared/src/components'),
      '@containers': path.resolve(__dirname, '../shared/src/containers'),
      '@contexts': path.resolve(__dirname, '../shared/src/contexts'),
      '@hooks': path.resolve(__dirname, '../shared/src/hooks'),
      '@utils': path.resolve(__dirname, '../shared/src/utils'),
    }
    return config
  }
})
