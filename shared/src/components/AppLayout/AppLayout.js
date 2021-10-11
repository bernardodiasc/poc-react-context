import * as React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import LoadingLayout from '@components/LoadingLayout'
import Navigation from '@components/Navigation'

import styles from './AppLayout.module.css'

const AppLayout = ({ isLoading, isDebugging, children }) => {
  return isLoading ? (
    <main>
      <SiteMetadata title="Loading App..." />
      <LoadingLayout />
    </main>
  ) : (
    <main>
      {isDebugging && (
        <div className={styles.debugPanel}>
          <Navigation />
        </div>
      )}
      {children}
    </main>
  )
}

export default AppLayout
