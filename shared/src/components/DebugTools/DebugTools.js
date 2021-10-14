import * as React from 'react'

import RouteDetails from './RouteDetails'
import AllRoutes from './AllRoutes'
import ScreenConfig from './ScreenConfig'

import * as styles from './DebugTools.module.css'

const DebugTools = ({ isDebugging, AppLink, screens, screen, isMobile, toggleMobile }) => {
  return isDebugging ? (
    <aside className={styles.component}>
      <ScreenConfig toggleMobile={toggleMobile} isMobile={isMobile} />
      <RouteDetails screen={screen} />
      <AllRoutes AppLink={AppLink} screens={screens} />
    </aside>
  ) : null
}

export default DebugTools
