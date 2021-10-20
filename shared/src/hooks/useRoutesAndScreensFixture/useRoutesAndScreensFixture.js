import { useState, useEffect } from 'react'

import useAppContext from '@contexts/App'

import screens from '@dev/fixtures/routes-and-screens.json'

function getCurrentScreen (screens = [], pathname = '/', screenState) {
  return (screenState && screens.find(screen => screen.to === pathname && screen.state === screenState))
    || screens.find(screen => screen.to === pathname)
    || {}
}

function getRoutesFromScreens (screens = []) {
  return screens.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.to]: [
        ...(acc[cur.to] || []),
        cur
      ]
    }),
    {}
  )
}

function useRoutesAndScreensFixture () {
  const { isSSR } = useAppContext()
  const [screen, setScreen] = useState({})
  const [screenState, setScreenState] = useState('')

  const pathname = isSSR ? '' : window.location.pathname

  useEffect(() => {
    setScreen(getCurrentScreen(screens, pathname, screenState))
  }, [pathname, screenState])

  return {
    screens,
    screen,
    routes: getRoutesFromScreens(screens),
    setScreen: setScreenState,
  }
}

export default useRoutesAndScreensFixture
export { getCurrentScreen, getRoutesFromScreens }
