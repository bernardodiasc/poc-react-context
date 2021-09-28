/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import * as React from 'react'
// import { renderToString } from "react-dom/server"

import { AppProvider, AppContainer } from '@containers/AppContainer'

export const wrapRootElement = ({ element }) => <AppProvider>{element}</AppProvider>
export const wrapPageElement = ({ element, props }) => <AppContainer {...props}>{element}</AppContainer>
// export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) =>
//   replaceBodyHTMLString(renderToString(<AppProvider>{bodyComponent}</AppProvider>))
