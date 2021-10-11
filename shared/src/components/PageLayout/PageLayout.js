import * as React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import LoadingLayout from '@components/LoadingLayout'

const PageLayout = ({ title = 'X-Team', children }) => {
  return (
    <article>
      <SiteMetadata title={title} />
      {/* <img src={screenshot
        ? `${process.env.GATSBY_DOMAIN_URL}screenshots/desktop/${screenshot}`
        : } /> */}
      {/* <img src={X} /> */}
    </article>
  )
}

export default PageLayout
