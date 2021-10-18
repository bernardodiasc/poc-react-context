import * as React from 'react'

import SiteMetadata from '@components/SiteMetadata'
import PageContainer from '@containers/Page'

const DashboardPage = () => {
  return (
    <PageContainer>
      <SiteMetadata title="Dashboard page" />
      Dashboard Page
    </PageContainer>
  )
}

export default DashboardPage
