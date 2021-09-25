import * as React from 'react'
import { Link } from 'gatsby'

import LoadingLayout from '@components/LoadingLayout'

import { useAppContext } from '@containers/AppContainer'

// Layout components are a kind of components,
// their CSS styles refers to the browser's viewport.
// Every page should be wrapped by a Layout component.

const PageLayout = ({ children, background }) => {
  const styles = {
    color: '#232129',
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
    height: '100vh',
  }

  return (
    <article style={styles}>
      {background ? (
        <img src={`/screenshots/desktop/${background}`} />
      ) : (
        <>
          {children}
          <hr />
        </>
      )}
    </article>
  )
}

export default PageLayout
