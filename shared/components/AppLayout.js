import * as React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import LoadingLayout from '@components/LoadingLayout'
import Navigation from '@components/Navigation'

import { useAppContext } from '@contexts/App'

const AppLayout = ({ children }) => {
  const { isAppMounted, isSSR, features, logged } = useAppContext()
  const isAppReady = (isAppMounted && features && logged) || isSSR
  return isAppReady ? (
    <main>
      {features?.DEBUG_TOOLS && <Navigation />}
      {children}
    </main>
  ) : (
    <main>
      <SiteMetadata title="Loading App..." />
      <LoadingLayout />
    </main>
  )
}

export default AppLayout
