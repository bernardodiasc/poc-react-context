import React, { useState } from 'react'
import Markdown from 'markdown-to-jsx'
import Draggable from 'react-draggable'

import LinkRow from './LinkRow'
import LabelRow from './LabelRow'
import SwitchButton from './SwitchButton'

import * as styles from './DebugTools.module.css'

const DebugTools = () => {
  const [isExpanded, setIsExpanded] = useState(true)
  const [isMobile, setIsMobile] = useState(true)
  const toggleNav = () => setIsExpanded(!isExpanded)
  const toggleMobile = () => setIsMobile(!isMobile)

  // const renderNavList = (items) => items
  //   .sort((a, b) => a.to.toLowerCase().localeCompare(b.to.toLowerCase()))
  //   .map((link, key) => (
  //     <li key={`item-${key}`}>
  //       <LinkRow to={link.to} state={{ screenshot: link.screenshot }}>
  //         {link.title || link.to}
  //       </LinkRow>
  //       {link.label && (
  //         <span> {link.label}</span>
  //       )}
  //     </li>
  //   ))

  // const renderNavigaation = (list, key) => (
  //   <details open={key===0} key={`details-${key}`}>
  //     <summary><Markdown>{list.summary}</Markdown></summary>
  //     <ul style={styles.ul}>
  //       {renderNavList(list.items)}
  //     </ul>
  //   </details>
  // )

  return (
    <Draggable>
      <nav className={styles.DebugTools}>
        <LabelRow label="Mobile viewport">
          <SwitchButton onClick={toggleMobile} />
        </LabelRow>
      </nav>
    </Draggable>
  )
}

export default DebugTools
