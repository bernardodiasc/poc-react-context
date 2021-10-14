import * as React from 'react'

import RouteDetails from './RouteDetails'
import AllRoutes from './AllRoutes'
import ScreenConfig from './ScreenConfig'

import * as styles from './DebugTools.module.css'

const DebugTools = ({ AppLink }) => {
  return (
    <aside className={styles.component}>
      <ScreenConfig />
      <RouteDetails />
      <AllRoutes AppLink={AppLink} />
    </aside>
  )
}

export default DebugTools
