import React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import PageLayout from '@components/PageLayout'

const JobsPage = ({ location: { state: { screenshot } } }) => (
  <>
    <SiteMetadata title="Jobs Dashboard page" />
    <PageLayout background={screenshot} />
  </>
)

export default JobsPage
