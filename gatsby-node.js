/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@containers': path.resolve(__dirname, 'src/containers'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@utils': path.resolve(__dirname, 'src/utils')
      }
    }
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions
  // To support dynamic Job pages
  if (page.path.match(/^\/jobs(?!\/my-applications)/)) {
    page.matchPath = '/jobs/*'
    createPage(page)
  }
}
