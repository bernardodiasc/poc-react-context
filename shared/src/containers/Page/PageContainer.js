import * as React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import ScreenshotPage from '@components/ScreenshotPage'
import useAppContext from '@contexts/App'
import useDebugToolsContext from '@contexts/DebugTools'

const PageContainer = ({ title }) => {
  const { envVars: { DOMAIN_URL }, Img } = useAppContext()
  const { isDebugging, isMobile, screen } = useDebugToolsContext()

  const viewport = isMobile ? 'mobile' : 'desktop'
  const imgSrc = `${DOMAIN_URL}screenshots/${viewport}/${screen[viewport]}`

  return (
    <>
      <SiteMetadata title={title} />
      <ScreenshotPage
        screen={screen}
        imgSrc={imgSrc}
        AppImg={Img}
      />
    </>
  )
}

export default PageContainer
