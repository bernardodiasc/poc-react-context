/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import * as React from 'react'

import { AppProvider, AppContainer } from '@containers/App'

export const wrapRootElement = ({ element }) => <AppProvider element={element} />
export const wrapPageElement = ({ element, props }) => <AppContainer element={element} {...props} />
