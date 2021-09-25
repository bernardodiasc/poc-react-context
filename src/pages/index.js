import React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import PageLayout from '@components/PageLayout'

const IndexPage = ({ location: { state: { screenshot } } }) => (
  <>
    <SiteMetadata title="Index page" />
    <PageLayout background={screenshot} />
  </>
)

export default IndexPage
