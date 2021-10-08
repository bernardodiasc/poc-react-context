import React from 'react'

import { useAppContext } from '@contexts/App'

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
 const AppContainer = ({ element, props }) => {
  const { isAppMounted } = useAppContext()

  // EFFECTS
  // - Redirect rules happens here during App Loading stage.
  // - Third party that applies globally are added here.
  // - App behaviours such as idle screen also goes here.

  // key={isAppMounted} is required here to prevent hydration issues
  // https://www.gatsbyjs.com/docs/conceptual/react-hydration/
  return (
    <AppLayout key={isAppMounted}>
      {element}
    </AppLayout>
  )
}

export default AppContainer
