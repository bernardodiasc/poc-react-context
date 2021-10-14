import * as React from 'react'

import SiteMetadata from '@components/SiteMetadata'

const PageLayout = ({ title = 'X-Team', children, pageContext }) => {
  console.log({pageContext})
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
