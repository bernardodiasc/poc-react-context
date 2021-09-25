import React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import PageLayout from '@components/PageLayout'

const JobsPage = ({ location }) => {
  const { screenshot } = location.state || {}
  return (
    <>
      <SiteMetadata title="Jobs Dashboard page" />
      <PageLayout background={screenshot} />
    </>
  )
}

export default JobsPage
