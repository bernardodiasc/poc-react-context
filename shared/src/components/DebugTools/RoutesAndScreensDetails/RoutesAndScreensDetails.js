import * as React from 'react'

import Panel from '../Panel'

import * as styles from './RoutesAndScreensDetails.module.css'

const RoutesAndScreensDetails = ({ screen }) => {
  return (
    <Panel title="Route and Screen Details">
      {screen && (
        <div className={styles.component}>
          <h3>Route: <code>{screen.to}</code></h3>
          <p><strong>Description:</strong> {screen.state}</p>
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

export default RoutesAndScreensDetails
