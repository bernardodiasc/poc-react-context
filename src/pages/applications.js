import React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import PageLayout from '@components/PageLayout'

const ApplicationsPage = ({ location: { state: { screenshot } } }) => (
  <>
    <SiteMetadata title="Applications page" />
    <PageLayout background={screenshot} />
  </>
)

export default ApplicationsPage
