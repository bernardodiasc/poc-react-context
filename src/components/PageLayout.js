import * as React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'

import SiteMetadata from '@components/SiteMetadata'
import LoadingLayout from '@components/LoadingLayout'

import { useAppContext } from '@containers/AppContainer'
import useFeatureFlags from '@hooks/useFeatureFlags'

const PageLayout = ({ title = 'X-Team', children }) => {
  const { features } = useAppContext()
  const location = useLocation()
  const { screenshot } = location.state || {}

  return (
    <article>
      <SiteMetadata title={title} />
      {screenshot ? (
        <img src={`${process.env.GATSBY_DOMAIN_URL}screenshots/desktop/${screenshot}`} />
      ) : (
        <>
          {children}
          <hr />
          Try clicking on a route in the debug navigation.
        </>
      )}
    </article>
  )
}

export default PageLayout
