import * as React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import ScreenshotPage from '@components/ScreenshotPage'
import useAppContext from '@contexts/App'

import links from '@dev/fixtures/routes-and-screens.json'

const PageContainer = ({ title, location }) => {
  const { envVars } = useAppContext()
  const { DOMAIN_URL } = envVars
  const screen = links.find(link => link.to === location.pathname) || {}
  return (
    <>
      <SiteMetadata title={title} />
      <ScreenshotPage
        screen={screen}
        DOMAIN_URL={DOMAIN_URL}
      />
    </>
  )
}

export default PageContainer
