import * as React from 'react'

import Panel from '../Panel'

import * as styles from './RouteDetails.module.css'

const RouteDetails = ({ screen }) => {
  return (
    <Panel title="Route Details">
      {screen && (
        <div className={styles.component}>
          <h3>Route: <code>{screen.to}</code></h3>
          <p><strong>Description:</strong> Jobs Board is public access.</p>
          <p><strong>Redirect conditions:</strong> Only affected by redirectUrl param.</p>
          <p><strong>SEO:</strong> This screen requires dynamic data that changes frequently, along with this the sitemap preferences must be managed accondingly.</p>
          <p><strong>SEO Metadata:</strong></p>
          <ul>
            <li><strong>Title:</strong>Job Board - X-Team</li>
          </ul>
        </div>
      )}
    </Panel>
  )
}

export default RouteDetails
