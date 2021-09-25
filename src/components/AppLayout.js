import * as React from 'react'

import LoadingLayout from '@components/LoadingLayout'

import { useAppContext } from '@containers/AppContainer'

const PageLayout = ({ pageTitle, children }) => {
  const { isAppMounted, isAppLoading, isAppStillLoading } = useAppContext()

  const isAppReady = !isAppLoading && !isAppStillLoading

  return isAppReady ? (
    <main style={styles}>
      <Navigation />
      {children}
    </main>
  ) : (
    <LoadingLayout pageTitle="Loading App..." />
  )
}

export default PageLayout
