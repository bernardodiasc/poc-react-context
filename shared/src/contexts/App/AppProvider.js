import * as React from 'react'
import axios from 'axios'
import { SWRConfig } from 'swr'

import AppContext from './AppContext'

import useIsAppMounted from '@hooks/useIsAppMounted'
import useAuthentication from '@hooks/useAuthentication'

import { isSSR } from '@utils/helpers'

/**
 * AppProvider
 *
 * This provider is added to wrapPageElement.
 * It renders on top of all Gatsby's pages.
 * It provides context data accessible anywhere in the app.
 * It has only one declared in the render tree during user session.
 */
const AppProvider = ({ children, pageProps, AppLink, AppImg, envVars }) => {
  const { isAppMounted } = useIsAppMounted()

  // This is a fake authentication
  const { logged } = useAuthentication()

  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) => axios.get(resource, init).then(res => res.data),
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      <AppContext.Provider
        value={{
          isAppMounted,
          isSSR,
          pageProps,
          logged,
          AppLink,
          AppImg,
          envVars,
        }}
      >
        {children}
      </AppContext.Provider>
    </SWRConfig>
  )
}

export default AppProvider
