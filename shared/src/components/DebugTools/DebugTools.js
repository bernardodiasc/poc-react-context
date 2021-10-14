import * as React from 'react'

import RouteDetails from './RouteDetails'
import AllRoutes from './AllRoutes'
import ScreenConfig from './ScreenConfig'

import * as styles from './DebugTools.module.css'

const DebugTools = ({ AppLink, screens, screen }) => {
  return (
    <aside className={styles.component}>
      <ScreenConfig />
      <RouteDetails screen={screen} />
      <AllRoutes AppLink={AppLink} screens={screens} />
    </aside>
  )
}

export default DebugTools
