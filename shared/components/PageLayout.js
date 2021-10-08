import * as React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'

import SiteMetadata from '@components/SiteMetadata'
import LoadingLayout from '@components/LoadingLayout'
// import Gliph from '@components/Gliph'
import X from './Gliphs/svgs/x.svg'

import { useAppContext } from '@contexts/App'
import useFeatureFlags from '@hooks/useFeatureFlags'

const PageLayout = ({ title = 'X-Team', children }) => {
  const { features } = useAppContext()
  const location = useLocation()
  const { screenshot } = location.state || {}

  return (
    <article>
      <SiteMetadata title={title} />
      {/* <img src={screenshot
        ? `${process.env.GATSBY_DOMAIN_URL}screenshots/desktop/${screenshot}`
        : } /> */}
      {/* <img src={X} /> */}
      <X />
    </article>
  )
}

export default PageLayout
