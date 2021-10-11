import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import AppContext from './AppContext'

import useIsAppMounted from '@hooks/useIsAppMounted'
import useAuthentication from '@hooks/useAuthentication'

import { isSSR } from '@utils/helpers'

const queryClient = new QueryClient()

/**
 * AppProvider
 *
 * This provider is added to wrapPageElement.
 * It renders on top of all Gatsby's pages.
 * It provides context data accessible anywhere in the app.
 * It has only one declared in the render tree during user session.
 */
const AppProvider = ({ children, pageContext }) => {
  const { isAppMounted } = useIsAppMounted()

  // This is a fake authentication
  const { logged } = useAuthentication()

  return (
    <AppContext.Provider
      value={{
        isAppMounted,
        isSSR,
        isAppLoading: isSSR || !isAppMounted,
        pageContext,
        logged,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const AppProviderWrapper = (props) => (
  <QueryClientProvider client={queryClient}>
    <AppProvider {...props} />
  </QueryClientProvider>
)

export default AppProviderWrapper
