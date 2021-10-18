import * as React from 'react'

import ScreenLink from '../ScreenLink'

import * as styles from './ScreenLinksList.module.css'

const ScreenLinksList = ({ navigate, AppLink, route, routes, screen: currentScreen, setScreen }) => {
  return Array.isArray(routes[route])
    ? routes[route]
      .filter(thisScreen => Boolean(thisScreen.state))
      .map(thisScreen => {
        const isActive = currentScreen.state === thisScreen.state
        return (
          <ScreenLink
            isActive={isActive}
            navigate={navigate}
            AppLink={AppLink}
            screen={thisScreen}
            setScreen={setScreen}
            key={`${route}-${thisScreen.state}`}
          />
        )
      })
    : null
}

export default ScreenLinksList
