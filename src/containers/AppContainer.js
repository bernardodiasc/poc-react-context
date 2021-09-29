import React, { createContext, useContext, useState, useEffect } from 'react'

import AppLayout from '@components/AppLayout'

import useIsAppMounted from '@hooks/useIsAppMounted'
import useFeatureFlags from '@hooks/useFeatureFlags'
import useAuthentication from '@hooks/useAuthentication'

import { isSSR } from '@utils/helpers'

const initialAppState = {
  isAppMounted: false,
  isSSR,
  isAppLoading: true
}
const AppContext = createContext(initialAppState)

// Safely guarded useAppContext hook
const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) {
    return console.erro('This hook should be wraped by AppProvider')
  }

  return context
}

// The provider are used only once at wrapRootElement to avoid duplication of data
const AppProvider = ({ children }) => {
  const { isAppMounted } = useIsAppMounted()

  // Cache "features" at AppContext
  const { features } = useFeatureFlags()

  // This is a fake authentication
  const { logged } = useAuthentication()

  return (
    <AppContext.Provider
      value={{
        isAppMounted,
        isSSR,
        isAppLoading: isSSR || !isAppMounted,
        features,
        logged,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

/**
 * AppContainer
 *
 * This container is added to wrapPageElement.
 * It renders on top of all Gatsby's pages.
 * It has only one declared in the render tree during user session.
 *
 * https://v4.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting
 */
const AppContainer = ({ children, ...props }) => {
  // EFFECTS
  // - Redirect rules happens here during App Loading stage.
  // - Third party that applies globally are added here.
  // - App behaviours such as idle screen also goes here.

  // key={isAppMounted} is required here to prevent hydration issues
  // https://www.gatsbyjs.com/docs/conceptual/react-hydration/
  const { isAppMounted } = useAppContext()
  return (
    <AppLayout key={isAppMounted}>
      {children}
    </AppLayout>
  )
}

export { AppContainer, AppProvider, AppContext, useAppContext }
