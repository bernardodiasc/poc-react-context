import React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import PageLayout from '@components/PageLayout'

const SettingsPage = ({ location }) => {
  const { screenshot } = location.state || {}
  return (
    <>
      <SiteMetadata title="Settings page" />
      <PageLayout background={screenshot} />
    </>
  )
}

export default SettingsPage
