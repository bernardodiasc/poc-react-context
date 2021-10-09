import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import AppContext from './AppContext'

import useIsAppMounted from '@hooks/useIsAppMounted'
import useFeatureFlags from '@hooks/useFeatureFlags'
import useAuthentication from '@hooks/useAuthentication'

import { isSSR } from '@utils/helpers'

const queryClient = new QueryClient()

// The provider are used only once at wrapPageElement to avoid duplication of data
const AppProvider = ({ children, pageContext }) => {
  const { isAppMounted } = useIsAppMounted()

  // Cache "features" at AppContext
  const features = useFeatureFlags()
  console.log(features)

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
        ...pageContext,
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
