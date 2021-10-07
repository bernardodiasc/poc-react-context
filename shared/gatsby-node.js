const path = require('path')

exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      // ⚠ Note the '..' in the path because the docz gatsby project lives in the `.docz` directory
      modules: [path.resolve(__dirname, '../'), 'node_modules'],
      alias: {
        // Shared
        '@components': path.resolve(__dirname, '../components'),
        '@config': path.resolve(__dirname, '../config'),
        '@containers': path.resolve(__dirname, '../containers'),
        '@contexts': path.resolve(__dirname, '../contexts'),
        '@data': path.resolve(__dirname, '../data'),
        '@hooks': path.resolve(__dirname, '../hooks'),
        '@utils': path.resolve(__dirname, '../utils')
      },
    },
  })
}
