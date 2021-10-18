import * as React from 'react'

// This is a sample, in case the Container have a related Context:
import use<%= componentName %>Context from '@contexts/use<%= componentName %>Context'
// This is a sample, in case the Container have a related UI component:
import <%= componentName %>Layout from '@components/<%= componentName %>Layout'

const <%= componentName %>Container = ({ children, ...props }) => {
  // This is a sample, to showcase how to construct with:
  // Container, Contexts, Hooks and UI Components.
  // Inside a Container, no HTML or CSS is used. To compose UI,
  // use the Components passing state down using props.
  const { anything } = use<%= componentName %>Context()
  return Boolean(anything) ? (
    <<%= componentName %>Layout
      anything={anything}
    >
      {children}
    </<%= componentName %>Layout>
  ) : null
}

export default <%= componentName %>Container
