import * as React from 'react'

import DebugTools from '@components/DebugTools'
import useAppContext from '@contexts/App'
import useFeatureFlags from '@hooks/useFeatureFlags'
import useRoutesAndScreens from '@hooks/useRoutesAndScreens'

const DebugToolsContainer = () => {
  const { AppLink } = useAppContext()
  const { features } = useFeatureFlags()
  const { screens, screen } = useRoutesAndScreens()

  const isDebugging = features?.DEBUG_TOOLS
  return isDebugging ? (
    <DebugTools
      AppLink={AppLink}
      screens={screens}
      screen={screen}
    />
  ) : null
}

export default DebugToolsContainer
