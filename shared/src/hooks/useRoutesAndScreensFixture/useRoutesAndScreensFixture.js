import { useState, useEffect } from 'react'

import useAppContext from '@contexts/App'

import screens from '@dev/fixtures/routes-and-screens.json'

function useRoutesAndScreensFixture () {
  const { isSSR } = useAppContext()
  const [screen, setScreen] = useState({})

  const pathname = isSSR ? '' : window.location.pathname

  const setCurrentScreen = (state) => {
    const screen = screens.find(screen => screen.to === pathname && screen.state === state) || {}
    setScreen(screen)
  }

  useEffect(() => {
    setScreen(screens.find(screen => screen.to === pathname) || {})
  }, [pathname])

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
    setCurrentScreen,
  }
}

export default useRoutesAndScreensFixture
