/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import * as React from 'react'

import { AppProvider, AppContainer } from '@containers/App'

export const wrapRootElement = ({ element }) => <AppProvider element={element} />
export const wrapPageElement = ({ element, props }) => <AppContainer element={element} {...props} />
