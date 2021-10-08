import * as React from 'react'

import './<%= componentName %>.css'

const <%= componentName %> = ({ children }) => {
  return (
    <div className="<%= componentClass %>">
      {children}
    </div>
  )
}

export default <%= componentName %>
