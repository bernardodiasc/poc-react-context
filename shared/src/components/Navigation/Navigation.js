import React, { useState } from 'react'
import Markdown from 'markdown-to-jsx'

import NavigationLink from '@components/Navigation/NavigationLink'

// import SCREENS from "@dev/fixtures/screens.yaml"

const styles = {
  nav: {
    background: 'white',
    padding: '30px',
    border: '1px dashed',
    width: '200px',
    height: 'calc(100vh - 100px)',
    overflow: 'auto',
    opacity: '0.9',
  },
  closed: {
    height: 'auto',
  },
  ul: {
    margin: '1em 0 2.5em',
    padding: '0 0 0 1em',
    fontSize: '1.1rem',
    lineHeight: '1.4',
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

  return (
    <nav style={styles.nav}>
      {isExpanded ? (
        <>
          <button onClick={toggleNav}>Close debug panel</button>
          {/* {SCREENS.map((list, key) => renderNavigaation(list, key))} */}
        </>
      ) : (
        <button onClick={toggleNav}>Open debug panel</button>
      )}
    </nav>
  )
}

export default Navigation
