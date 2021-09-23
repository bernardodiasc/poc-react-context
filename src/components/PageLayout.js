import * as React from 'react'
import { Link } from 'gatsby'

// Layout components are special, they refer to the viewport and even the metatags are related to it.
// Every page will be wrapped by a Layout component.
import SiteMetadata from './SiteMetadata'
import Navigation from './Navigation'

const styles = {
  color: '#232129',
  padding: 96,
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const PageLayout = ({ pageTitle, children }) => {
  // console.log(props)
  return (
    <main style={styles}>
      <SiteMetadata title={pageTitle} />
      {children}
      <hr />
      <Navigation />
    </main>
  )
}

export default PageLayout
