/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import * as React from 'react'
import { Link } from 'gatsby'

import { AppProvider } from '@contexts/App'
import AppContainer from '@containers/App'

export const wrapPageElement = ({ element, props }) => (
  <AppProvider
    pageContext={props.pageContext}
    AppLink={Link}
  >
    <AppContainer>
      {element}
    </AppContainer>
  </AppProvider>
)
