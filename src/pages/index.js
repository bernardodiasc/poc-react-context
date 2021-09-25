import React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import PageLayout from '@components/PageLayout'

const IndexPage = ({ location }) => {
  const { screenshot } = location.state || {}
  return (
    <>
      <SiteMetadata title="Index page" />
      <PageLayout background={screenshot} />
    </>
  )
}

export default IndexPage
