import { useState, useEffect } from 'react'

import useAppContext from '@contexts/App'

import screens from '@dev/fixtures/routes-and-screens.json'

function useRoutesAndScreensFixture () {
  const { isSSR } = useAppContext()
  const [screen, setScreen] = useState({})
  const [screenState, setScreenState] = useState('')

  const pathname = isSSR ? '' : window.location.pathname

  useEffect(() => {
    const screen = (screenState &&  screens.find(screen => screen.to === pathname && screen.state === screenState))
      || screens.find(screen => screen.to === pathname)
    setScreen(screen || {})
  }, [pathname, screenState])

  return {
    screens,
    screen,
    routes: screens.reduce((acc, cur) => ({
      ...acc,
      [cur.to]: [
        ...(acc[cur.to] || []),
        cur
      ]
    }), {}),
    setScreen: setScreenState,
  }
}

export default useRoutesAndScreensFixture
