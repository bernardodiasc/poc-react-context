import * as React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import LoadingLayout from '@components/LoadingLayout'
import Navigation from '@components/Navigation'

import { useAppContext } from '@containers/AppContainer'

const PageLayout = ({ children }) => {
  const { isAppMounted, isAppLoading, isAppStillLoading } = useAppContext()

  const isAppReady = !isAppLoading && !isAppStillLoading

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

export default PageLayout
