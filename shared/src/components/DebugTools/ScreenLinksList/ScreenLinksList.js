import * as React from 'react'

import ScreenLink from '../ScreenLink'

import * as styles from './ScreenLinksList.module.css'

const ScreenLinksList = ({ navigate, AppLink, route, routes, setScreen }) => {
  return Array.isArray(routes[route])
    ? routes[route].filter(screen => Boolean(screen.state)).map(screen => (
      <ScreenLink
        navigate={navigate}
        AppLink={AppLink}
        screen={screen}
        setScreen={setScreen}
        key={`${route}-${screen.state}`}
      />
    )) : null
}

export default ScreenLinksList
