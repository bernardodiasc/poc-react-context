import React, { useState } from 'react'

import DebugToolsContext from './DebugToolsContext'

import useFeatureFlags from '@hooks/useFeatureFlags'
import useRoutesAndScreensFixture from '@hooks/useRoutesAndScreensFixture'

const DebugToolsProvider = ({ children, ...props }) => {
  const { features } = useFeatureFlags()
  const routesAndScreens = useRoutesAndScreensFixture()
  const [isMobile, setIsMobile] = useState(false)

  const toggleMobile = () => setIsMobile(!isMobile)
  const isDebugging = features?.DEBUG_TOOLS

  return (
    <DebugToolsContext.Provider
      value={{
        ...props,
        ...routesAndScreens,
        isDebugging,
        isMobile,
        toggleMobile,
      }}
    >
      {children}
    </DebugToolsContext.Provider>
  )
}

export default DebugToolsProvider
