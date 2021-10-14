import * as React from 'react'

import * as styles from './LabelRow.module.css'

const LabelRow = ({ label, children }) => {
  return (
    <label className={styles.component}>
      <span className={styles.label}>{label}</span>
      {children}
    </label>
  )
}

export default LabelRow
