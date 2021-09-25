import React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import PageLayout from '@components/PageLayout'

const SignupPage = ({ location }) => {
  const { screenshot } = location.state || {}
  return (
    <>
      <SiteMetadata title="Signup page" />
      <PageLayout background={screenshot} />
    </>
  )
}

export default SignupPage
