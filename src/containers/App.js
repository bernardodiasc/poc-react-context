import React, { Fragment, createContext, useContext, useState, useEffect } from 'react'

import Navigation from '@components/Navigation'

import useIsAppMounted from '@hooks/useIsAppMounted'
import useIsAppStillLoading from '@hooks/useIsAppStillLoading'

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

  // Any async data fetching goes here, example:
  const { isAppStillLoading } = useIsAppStillLoading()

  return (
    <AppContext.Provider
      value={{
        isAppMounted,
        isSSR,
        isAppLoading: isSSR || !isAppMounted,
        isAppStillLoading
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
 */
const AppContainer = ({ children, ...props }) => {
  // UTILITIES
  // - Redirect rules happens here during App Loading stage.
  // - Third party that applies globally are added here.
  // - App behaviours such as idle screen also goes here.

  const { isAppMounted } = useAppContext()

  return (
    <Fragment key={isAppMounted}>
      <Navigation />
      {children}
    </Fragment>
  )
  // key={isAppMounted} is required here to prevent hydration issues
}

export { AppContainer, AppProvider, AppContext, useAppContext }
