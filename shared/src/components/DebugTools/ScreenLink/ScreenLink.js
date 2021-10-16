import * as React from 'react'

import AppLinkFallback from '../AppLinkFallback'

import * as styles from './ScreenLink.module.css'

const ScreenLink = ({ isActive, navigate, AppLink, screen, active, setScreen }) => {
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
      className={[
        styles.component,
        isActive ? styles.active : '',
      ].join(' ')}
    >
      {screen.state}
    </AppLinkFallback>
  )
}

export default ScreenLink
