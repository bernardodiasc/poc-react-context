import useAppContext from '@contexts/App'

import screens from '@dev/fixtures/routes-and-screens.json'

function useRoutesAndScreensFixture () {
  const { isSSR } = useAppContext()
  const pathname = isSSR ? '' : window.location.pathname
  return {
    screens,
    screen: screens.find(link => link.to === pathname) || {},
    routes: screens.reduce((acc, cur) => ({
      ...acc,
      [cur.to]: [
        ...(acc[cur.to] || []),
        cur
      ]
    }), {}),
  }
}

export default useRoutesAndScreensFixture
