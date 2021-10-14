import * as React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import LoadingLayout from '@components/LoadingLayout'
import DebugTools from '@components/DebugTools'

import * as styles from './AppLayout.module.css'

const AppLayout = ({ isLoading, isDebugging, children }) => {
  return isLoading ? (
    <main>
      <SiteMetadata title="Loading App..." />
      <LoadingLayout />
    </main>
  ) : (
    <main>
      {isDebugging && <DebugTools />}
      {children}
    </main>
  )
}

export default AppLayout
