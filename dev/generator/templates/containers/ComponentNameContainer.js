import * as React from 'react'

import use<%= componentName %>Context from './use<%= componentName %>Context'

const <%= componentName %>Container = ({ children, ...props }) => {
  const { anything } = use<%= componentName %>Context()

  return (
    <>
      {children}
    </>
  )
}

export default <%= componentName %>Container
