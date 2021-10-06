/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const axios = require('axios')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // Gatsby
        '@pages': path.resolve(__dirname, './src/pages'),
        '@static': path.resolve(__dirname, './static'),

        // Shared
        '@components': path.resolve(__dirname, '../shared/components'),
        '@config': path.resolve(__dirname, '../shared/config'),
        '@containers': path.resolve(__dirname, '../shared/containers'),
        '@data': path.resolve(__dirname, '../shared/data'),
        '@hooks': path.resolve(__dirname, '../shared/hooks'),
        '@utils': path.resolve(__dirname, '../shared/utils')
      }
    }
  })
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const { data: features } = await axios.get('http://localhost:1337/feature-flags')

  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      features
    },
  })
}
