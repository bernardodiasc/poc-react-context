/**
 * Implement NextJS's app wrapper in this file.
 *
 * See: https://nextjs.org/docs/advanced-features/custom-app
 */

import Link from 'next/link'
import Image from 'next/image'

import { AppProvider } from '@contexts/App'
import AppContainer from '@containers/App'

const AppLink = ({ to, ...props }) => (
  <Link href={to} {...props} />
)

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider
      pageProps={pageProps}
      AppLink={AppLink}
      AppImg={Image}
      envVars={{
        DOMAIN_URL: process.env.NEXT_PUBLIC_DOMAIN_URL
      }}
    >
      <AppContainer>
        <Component />
      </AppContainer>
    </AppProvider>
  )
}

export default MyApp
