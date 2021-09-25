import React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import PageLayout from '@components/PageLayout'

const ProfilePage = ({ location: { state: { screenshot } } }) => (
  <>
    <SiteMetadata title="Profile page" />
    <PageLayout background={screenshot} />
  </>
)

export default ProfilePage
