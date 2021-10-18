import * as React from 'react'

import AppLinkFallback from '../AppLinkFallback'

import * as styles from './RouteLink.module.css'

const RouteLink = ({ to, AppLink }) => {
  return (
    <div className={styles.component}>
      <AppLinkFallback
        AppLink={AppLink}
        to={to}
        activeClassName={styles.active}
        className={styles.link}
      >
        {to}
      </AppLinkFallback>
    </div>
  )
}

export default RouteLink
