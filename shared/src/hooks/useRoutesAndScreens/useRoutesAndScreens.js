import useAppContext from '@contexts/App'

import screens from '@dev/fixtures/routes-and-screens.json'

function useRoutesAndScreens () {
  const { pageProps: { location: { pathname } } } = useAppContext()
  return {
    screens,
    screen: screens.find(link => link.to === pathname) || {}
  }
}

export default useRoutesAndScreens
