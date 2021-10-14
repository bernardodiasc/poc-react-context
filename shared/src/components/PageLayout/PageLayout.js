import * as React from 'react'

import SiteMetadata from '@components/SiteMetadata'

import links from '@dev/fixtures/routes-and-screens.json'

const PageLayout = ({ title = 'X-Team', children, pageContext, envVars, location }) => {
  const { DOMAIN_URL } = envVars || {}
  const screen = links.find(link => link.to === location.pathname)
  // console.log({pageContext, links, location, screen, img: `${DOMAIN_URL}screenshots/desktop/${screen.screenshot}`})
  console.log({envVars})
  return (
    <article>
      <SiteMetadata title={title} />
      {DOMAIN_URL && screen?.screenshot && (
        <img src={`${DOMAIN_URL}screenshots/desktop/${screen.screenshot}`} />
      )}
    </article>
  )
}

export default PageLayout
