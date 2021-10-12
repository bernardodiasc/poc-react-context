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
        '@components': path.resolve(__dirname, '../shared/src/components'),
        '@containers': path.resolve(__dirname, '../shared/src/containers'),
        '@contexts': path.resolve(__dirname, '../shared/src/contexts'),
        '@hooks': path.resolve(__dirname, '../shared/src/hooks'),
        '@utils': path.resolve(__dirname, '../shared/src/utils')
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
