import * as React from 'react'

import useAppContext from '@contexts/App'
import useFeatureFlags from '@hooks/useFeatureFlags'
import AppLayout from '@components/AppLayout'

/**
 * AppContainer
 *
 * This container is added to wrapPageElement.
 * It renders on top of all Gatsby's pages.
 * It has only one declared in the render tree during user session.
 *
 * https://v4.gatsbyjs.com/docs/how-to/routing/layout-components/#how-to-prevent-layout-components-from-unmounting
 */
 const AppContainer = ({ children, props }) => {
  const { isAppMounted, isSSR, AppLink } = useAppContext()
  const { features } = useFeatureFlags()

  const requiredData = Boolean(features)
  const isAppReady = (isAppMounted && requiredData) || isSSR
  const isDebugging = features?.DEBUG_TOOLS

  // EFFECTS
  // - Redirect rules happens here during App Loading stage.
  // - Third party that applies globally are added here.
  // - App behaviours such as idle screen also goes here.

  // key={isAppMounted} is required here to prevent hydration issues
  // https://www.gatsbyjs.com/docs/conceptual/react-hydration/
  return (
    <AppLayout
      key={isAppMounted}
      isLoading={!isAppReady}
      isDebugging={isDebugging}
      AppLink={AppLink}
    >
      {children}
    </AppLayout>
  )
}

export default AppContainer
