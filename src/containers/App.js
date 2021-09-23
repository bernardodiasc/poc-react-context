import React, { Fragment, createContext, useContext, useState, useEffect } from 'react'

import LoadingLayout from '@components/LoadingLayout'

import useIsAppMounted from '@hooks/useIsAppMounted'
import { isSSR } from '@utils/helpers'

const initialAppState = {
  isAppMounted: false,
  isSSR,
  isAppLoading: true
}
const AppContext = createContext(initialAppState)

// safely guarded useAppContext hook
const useAppContext = () => {
  const context = useContext(AppContext)

  if (!context) {
    return console.erro('This hook should be wraped by AppProvider')
  }

  return context
}

// provider are used only once to avoid duplication of data
const AppProvider = ({ children }) => {
  const { isAppMounted } = useIsAppMounted()

  // Any async data fetching goes here

  return (
    <AppContext.Provider
      value={{
        isAppMounted,
        isSSR,
        isAppLoading: isSSR || !isAppMounted
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

/**
 * AppContainer
 *
 * This container is declared on top of Gatsby pages therefore it has only one declared in the render tree.
 */
// AppContainer have render requirements and is on top of pages,
// therefore it has only one in the render tree.
// Third party thats applied globally are added here.
// App behaviours such as idle screen also goes here.


//
const AppContainer = ({ children, ...props }) => {
  const { isAppMounted, isAppLoading } = useAppContext()

  // Redirect rules happens here during App Loading stage.
  // It can be used raw javascript to handle location.pathname.

  // Example of a sync event that blocks the screen.
  const [isAppStillLoading, setIsAppStillLoading] = useState(isAppLoading)
  // console.log({isAppMounted, isAppStillLoading, isAppLoading})
  useEffect(() => {
    const loader = setTimeout(() => {
      setIsAppStillLoading(false)
    }, 3000)
    return () => clearTimeout(loader)
  }, [])

  // key={isAppMounted} is required here to prevent hydration issues
  return (
    <Fragment key={isAppMounted}>
      {isAppLoading || isAppStillLoading ? <LoadingLayout pageTitle="Loading App..." /> : children}
    </Fragment>
  )
}

export { AppContainer, AppProvider, AppContext, useAppContext }
