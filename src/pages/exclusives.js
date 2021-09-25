import React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import PageLayout from '@components/PageLayout'

const ExclusivesPage = ({ location }) => {
  const { screenshot } = location.state || {}
  return (
    <>
      <SiteMetadata title="Exclusives page" />
      <PageLayout background={screenshot} />
    </>
  )
}

export default ExclusivesPage
