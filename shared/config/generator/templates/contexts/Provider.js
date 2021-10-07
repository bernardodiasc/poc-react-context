import React from 'react'

import <%= componentName %>Context from './Context'

const <%= componentName %>Provider = ({ children, ...props }) => {
  return (
    <<%= componentName %>Context.Provider
      value={{
        ...props
      }}
    >
      {children}
    </<%= componentName %>Context.Provider>
  )
}

export default <%= componentName %>Provider
