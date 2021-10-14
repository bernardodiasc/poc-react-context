
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

import path from 'path'

import { getFeatureFlags } from '../shared/src/hooks/useFeatureFlags'

const onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // Gatsby
        '@pages': path.resolve(__dirname, './src/pages'),
        '@static': path.resolve(__dirname, './static'),

        // Shared
        '@dev': path.resolve(__dirname, '../shared/dev'),
        '@components': path.resolve(__dirname, '../shared/src/components'),
        '@containers': path.resolve(__dirname, '../shared/src/containers'),
        '@contexts': path.resolve(__dirname, '../shared/src/contexts'),
        '@hooks': path.resolve(__dirname, '../shared/src/hooks'),
        '@utils': path.resolve(__dirname, '../shared/src/utils')
      }
    }
  })
}

const onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const features = await getFeatureFlags()

  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      features
    },
  })
}

export {
  onCreateWebpackConfig,
  onCreatePage
}
