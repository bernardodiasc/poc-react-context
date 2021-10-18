import * as React from 'react'

import Panel from '../Panel'

import * as styles from './RouteDetails.module.css'

const RouteDetails = ({ screen }) => {
  return (
    <Panel title="Route Details">
      {screen && (
        <div className={styles.component}>
          <h3>Route: <code>{screen.to}</code></h3>
          <p><strong>Description:</strong> _</p>
          <p><strong>Redirect conditions:</strong> _</p>
          <p><strong>SEO:</strong> _</p>
          <p><strong>SEO Metadata:</strong></p>
          <ul>
            <li><strong>Title:</strong> _</li>
          </ul>
        </div>
      )}
    </Panel>
  )
}

export default RouteDetails
