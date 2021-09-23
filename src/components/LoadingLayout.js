import * as React from 'react'

import SiteMetadata from './SiteMetadata'

const styles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const LoadingLayout = ({ pageTitle }) => {
  return (
    <div style={styles}>
      <SiteMetadata title={pageTitle} />
      Loading...
    </div>
  )
}

export default LoadingLayout
