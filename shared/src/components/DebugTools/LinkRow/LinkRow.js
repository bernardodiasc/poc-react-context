import * as React from 'react'

import * as styles from './LinkRow.module.css'

const LinkRow = ({ children, to, state }) => {
  return (
    <div className={styles.component}>
      {children}
    </div>
  )
}

//   <Link
//     to={to}
//     activeStyle={styles.active}
//     // partiallyActive={true}
//     state={state}
//   >
//     {children}
//   </Link>
// )

export default LinkRow
