import { AppProvider } from '@contexts/App'
import AppContainer from '@containers/App'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider pageContext={pageProps}>
      <AppContainer>
        <Component />
      </AppContainer>
    </AppProvider>
  )
}

export default MyApp
