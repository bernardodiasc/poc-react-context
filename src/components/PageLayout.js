import * as React from 'react'
import { Link } from 'gatsby'

import LoadingLayout from '@components/LoadingLayout'

import { useAppContext } from '@containers/AppContainer'

const PageLayout = ({ children, background }) => (
  <article>
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

export default PageLayout
