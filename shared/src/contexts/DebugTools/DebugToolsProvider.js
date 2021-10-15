import React, { useState } from 'react'

import DebugToolsContext from './DebugToolsContext'

import useFeatureFlags from '@hooks/useFeatureFlags'
import useRoutesAndScreensFixture from '@hooks/useRoutesAndScreensFixture'

const DebugToolsProvider = ({ children, ...props }) => {
  const { features } = useFeatureFlags()
  const { screens, screen, routes } = useRoutesAndScreensFixture()
  const [isMobile, setIsMobile] = useState(false)
  const [screenState, setScreenState] = useState({})

  const toggleMobile = () => setIsMobile(!isMobile)
  const isDebugging = features?.DEBUG_TOOLS

  return (
    <DebugToolsContext.Provider
      value={{
        ...props,
        isDebugging,
        screens,
        screen,
        routes,
        isMobile,
        toggleMobile,
        screenState,
        setScreenState,
      }}
    >
      {children}
    </DebugToolsContext.Provider>
  )
}

export default DebugToolsProvider
