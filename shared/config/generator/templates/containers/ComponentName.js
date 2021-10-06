import React, { createContext, useContext } from 'react'

const initial<%= componentName %>State = {}
const <%= componentName %>Context = createContext(initial<%= componentName %>State)

// Safely guarded use<%= componentName %>Context hook
const use<%= componentName %>Context = () => {
  const context = useContext(<%= componentName %>Context)

  if (!context) {
    return console.erro('This hook should be wraped by <%= componentName %>Provider')
  }

  return context
}

const <%= componentName %>Provider = ({ children }) => {
  return (
    <<%= componentName %>Context.Provider
      value={{}}
    >
      {children}
    </<%= componentName %>Context.Provider>
  )
}

const <%= componentName %>Container = ({ element, props }) => {
  return (
    <>
      {element}
    </>
  )
}

export { <%= componentName %>Container, <%= componentName %>Provider, <%= componentName %>Context, use<%= componentName %>Context }
