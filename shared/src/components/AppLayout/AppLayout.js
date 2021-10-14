import * as React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import LoadingLayout from '@components/LoadingLayout'

import * as styles from './AppLayout.module.css'

const AppLayout = ({ isLoading, children, DebugTools }) => {
  return isLoading ? (
    <main>
      <SiteMetadata title="Loading App..." />
      <LoadingLayout />
    </main>
  ) : (
    <main>
      <DebugTools />
      {children}
    </main>
  )
}

export default AppLayout
