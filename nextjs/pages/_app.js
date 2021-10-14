import Link from 'next/link'

import { AppProvider } from '@contexts/App'
import AppContainer from '@containers/App'

const AppLink = ({ to, ...props }) => (
  <Link href={to} {...props} />
)

function MyApp({ Component, pageProps }) {
  console.log({pageProps})
  return (
    <AppProvider
      pageContext={pageProps}
      AppLink={AppLink}
    >
      <AppContainer>
        <Component />
      </AppContainer>
    </AppProvider>
  )
}

export default MyApp
