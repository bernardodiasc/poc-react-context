import * as React from 'react'

import RoutesAndScreensDetails from './RoutesAndScreensDetails'
import AllRoutesAndScreens from './AllRoutesAndScreens'
import ScreenConfig from './ScreenConfig'

import * as styles from './DebugTools.module.css'

const DebugTools = ({
  isDebugging,
  navigate,
  AppLink,
  screen,
  routes,
  isMobile,
  toggleMobile,
  setCurrentScreen,
}) => {
  return isDebugging ? (
    <aside className={styles.component}>
      <ScreenConfig toggleMobile={toggleMobile} isMobile={isMobile} />
      <RoutesAndScreensDetails screen={screen} />
      <AllRoutesAndScreens
        AppLink={AppLink}
        navigate={navigate}
        routes={routes}
        setScreen={setCurrentScreen}
      />
    </aside>
  ) : null
}

export default DebugTools
