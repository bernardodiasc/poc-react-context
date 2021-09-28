import * as React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import LoadingLayout from '@components/LoadingLayout'
import Navigation from '@components/Navigation'

import { useAppContext } from '@containers/AppContainer'

const AppLayout = ({ children }) => {
  const { isAppLoading, features } = useAppContext()
  const isAppReady = !isAppLoading && features
  return isAppReady ? (
    <main>
      <Navigation />
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
