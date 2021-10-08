import React from 'react'

import AppContext from './AppContext'

import useIsAppMounted from '@hooks/useIsAppMounted'
import useFeatureFlags from '@hooks/useFeatureFlags'
import useAuthentication from '@hooks/useAuthentication'

import { isSSR } from '@utils/helpers'

// The provider are used only once at wrapPageElement to avoid duplication of data
const AppProvider = ({ children, pageContext }) => {
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
        ...pageContext,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
