import * as React from 'react'

import RouteDetails from './RouteDetails'
import AllRoutesAndScreens from './AllRoutesAndScreens'
import AllRoutes from './AllRoutes'
import ScreenConfig from './ScreenConfig'

import * as styles from './DebugTools.module.css'

const DebugTools = ({ isDebugging, AppLink, screens, screen, routes, isMobile, toggleMobile }) => {
  return isDebugging ? (
    <aside className={styles.component}>
      <ScreenConfig toggleMobile={toggleMobile} isMobile={isMobile} />
      <RouteDetails screens={screens} screen={screen} />
      <AllRoutesAndScreens AppLink={AppLink} routes={routes} />
      <AllRoutes AppLink={AppLink} routes={routes} />
    </aside>
  ) : null
}

export default DebugTools
