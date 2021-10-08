import React, { useState } from 'react'
import Markdown from 'markdown-to-jsx'

import NavigationLink from '@components/NavigationLink'

import SCREENS from "@dev/fixtures/screens.yaml"

const styles = {
  nav: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'white',
    padding: '30px',
    border: '1px dashed',
    width: '200px',
    height: 'calc(100vh - 100px)',
    overflow: 'auto',
    opacity: '0.9',
  },
  ul: {
    margin: '1em 0 2.5em',
    padding: '0 0 0 1em',
    fontSize: '1.1rem',
    lineHeight: '1.4',
  },
  open: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  close: {
    position: 'absolute',
    top: '-1px',
    right: '-1px',
  },
}

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(true)
  const toggleNav = () => setIsExpanded(!isExpanded)
  const renderNavList = (items) => items
    .sort((a, b) => a.to.toLowerCase().localeCompare(b.to.toLowerCase()))
    .map((link, key) => (
      <li key={`item-${key}`}>
        <NavigationLink to={link.to} state={{ screenshot: link.screenshot }}>
          {link.title || link.to}
        </NavigationLink>
        {link.label && (
          <span> {link.label}</span>
        )}
      </li>
    ))

  const renderNavigaation = (list, key) => (
    <details open={key===0} key={`details-${key}`}>
      <summary><Markdown>{list.summary}</Markdown></summary>
      <ul style={styles.ul}>
        {renderNavList(list.items)}
      </ul>
    </details>
  )

  return isExpanded ? (
    <nav style={styles.nav}>
      <button style={styles.close} onClick={toggleNav}>Close debug panel</button>
      {SCREENS.map((list, key) => renderNavigaation(list, key))}
    </nav>
  ) : <button style={styles.open} onClick={toggleNav}>Open debug panel</button>
}

export default Navigation
