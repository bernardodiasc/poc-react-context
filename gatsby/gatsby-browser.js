/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import * as React from 'react'

import { AppProvider, AppContainer } from '@containers/AppContainer'

export const wrapPageElement = ({ element, props }) => (
  <AppProvider pageContext={props.pageContext}>
    <AppContainer element={element} />
  </AppProvider>
)
