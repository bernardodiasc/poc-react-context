import * as React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import ScreenshotPage from '@components/ScreenshotPage'
import useAppContext from '@contexts/App'
import useRoutesAndScreensFixture from '@hooks/useRoutesAndScreensFixture'

const PageContainer = ({ title }) => {
  const { envVars: { DOMAIN_URL }, Img } = useAppContext()
  const { screen } = useRoutesAndScreensFixture()
  return (
    <>
      <SiteMetadata title={title} />
      <ScreenshotPage
        screen={screen}
        DOMAIN_URL={DOMAIN_URL}
        AppImg={Img}
      />
    </>
  )
}

export default PageContainer
