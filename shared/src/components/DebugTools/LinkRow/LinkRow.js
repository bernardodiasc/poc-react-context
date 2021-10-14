import * as React from 'react'

import * as styles from './LinkRow.module.css'

const LinkRow = ({ to, screenshot, state, AppLink }) => {
  const Link = AppLink
    ? AppLink
    : () => <a href={to} className={styles.link}>{to}</a>
  return (
    <div className={styles.component}>
      <Link to={to} activeStyle={styles.active} className={styles.link} />
      {state && (
        <div className={styles.state}><strong>State:</strong> {state}</div>
      )}
    </div>
  )
}

export default LinkRow
