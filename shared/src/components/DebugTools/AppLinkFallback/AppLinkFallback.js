import * as React from 'react'

import * as styles from './AppLinkFallback.module.css'

const AppLinkFallback = ({ AppLink, to, className, activeClassName, children, onClick }) => AppLink
  ? <AppLink to={to} className={className} activeClassName={activeClassName}>{children}</AppLink>
  : <a href={to} className={className} onClick={onClick}>{children}</a>

export default AppLinkFallback
