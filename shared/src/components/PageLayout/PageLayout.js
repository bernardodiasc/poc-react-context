import * as React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import LoadingLayout from '@components/LoadingLayout'

import useAppContext from '@contexts/App'
import useFeatureFlags from '@hooks/useFeatureFlags'

const PageLayout = ({ title = 'X-Team', children }) => {
  const { features } = useAppContext()

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
