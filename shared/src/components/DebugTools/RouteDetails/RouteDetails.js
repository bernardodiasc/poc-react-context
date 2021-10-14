import * as React from 'react'
// import Markdown from 'markdown-to-jsx'

import * as styles from './RouteDetails.module.css'

const RouteDetails = ({ to, screenshot, label = '' }) => {
  return (
    <div className={styles.component}>
      <p><strong>Current route:</strong> /</p>
      <p><strong>Description:</strong> Jobs Board is public access.</p>
      <p><strong>Redirect conditions:</strong> Only affected by redirectUrl param.</p>
    </div>
  )
}

// const renderNavigaation = (list, key) => (
  //   <details open={key===0} key={`details-${key}`}>
  //     <summary><Markdown>{list.summary}</Markdown></summary>
  //     <ul style={styles.ul}>
  //       {renderNavList(list.items)}
  //     </ul>
  //   </details>
  // )

// const LinkRow = ({ children, to, AppLink }) => {
//   const Link = AppLink
//     ? AppLink
//     : () => <a href={to} className={styles.component}>{children}</a>
//   return (
//     <Link
//       to={to}
//       activeStyle={styles.active}
//       className={styles.component}
//     >
//       {children}
//     </Link>
//   )
// }

export default RouteDetails
