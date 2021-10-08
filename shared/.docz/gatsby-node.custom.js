const path = require('path')

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      // ⚠ Note the '..' in the path because the docz gatsby project lives in the `.docz` directory
      modules: [path.resolve(__dirname, '../'), 'node_modules'],
      alias: {
        '@dev': path.resolve(__dirname, '../dev'),
        '@components': path.resolve(__dirname, '../src/components'),
        '@containers': path.resolve(__dirname, '../src/containers'),
        '@contexts': path.resolve(__dirname, '../src/contexts'),
        '@hooks': path.resolve(__dirname, '../src/hooks'),
        '@utils': path.resolve(__dirname, '../src/utils')
      },
    },
  })
}
