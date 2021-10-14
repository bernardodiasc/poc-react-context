import React, { useState } from 'react'
import Draggable from 'react-draggable'

import * as styles from './Panel.module.css'

const Panel = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(true)
  const toggleExpanded = () => setIsExpanded(!isExpanded)
  const collapsePanel = () => setIsExpanded(false)
  return (
    <Draggable handle="strong">
      <div className={styles.component}>
        <strong className={styles.title}>
          {title}
          {children && (
            <span className={styles.toggle} onClick={toggleExpanded}>
              {isExpanded ? '^' : 'V'}
            </span>
          )}
        </strong>
        {isExpanded && (
          <div className={styles.content}>
            {children}
          </div>
        )}
      </div>
    </Draggable>
  )
}

export default Panel
