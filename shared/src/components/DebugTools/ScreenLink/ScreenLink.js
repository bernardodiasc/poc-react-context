import * as React from 'react'

import AppLinkFallback from '../AppLinkFallback'

import * as styles from './ScreenLink.module.css'

const ScreenLink = ({ navigate, AppLink, screen, setScreen }) => {
  const handleOnClick = (e) => {
    e.preventDefault()
    setScreen(screen.state)
    navigate(screen.to)
  }
  return (
    <AppLinkFallback
      // AppLink={AppLink}
      to={screen.to}
      onClick={handleOnClick}
      className={styles.component}
    >
      {screen.state}
    </AppLinkFallback>
  )
}

export default ScreenLink
