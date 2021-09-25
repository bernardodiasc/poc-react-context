/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import * as React from 'react'

import { AppProvider, AppContainer } from '@containers/AppContainer'

export const wrapRootElement = ({ element }) => <AppProvider>{element}</AppProvider>
export const wrapPageElement = ({ element, props }) => <AppContainer {...props}>{element}</AppContainer>
