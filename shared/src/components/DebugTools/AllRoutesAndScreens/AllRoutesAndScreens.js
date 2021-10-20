import React, { Fragment } from 'react'

import Panel from '../Panel'
import RouteLink from '../RouteLink'
import ScreenLinksList from '../ScreenLinksList'

import * as styles from './AllRoutesAndScreens.module.css'

const AllRoutesAndScreens = ({ navigate, AppLink, routes = {}, screen, setScreen }) => {
  return (
    <Panel title="All Routes and Screens">
      {Object.keys(routes).map(key => (
        <Fragment key={key}>
          <RouteLink
            AppLink={AppLink}
            to={key}
          />
          <ScreenLinksList
            route={key}
            navigate={navigate}
            AppLink={AppLink}
            routes={routes}
            screen={screen}
            setScreen={setScreen}
          />
        </Fragment>
      ))}
    </Panel>
  )
}

export default AllRoutesAndScreens
