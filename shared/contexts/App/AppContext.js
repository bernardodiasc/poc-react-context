import React, { createContext } from 'react'

const initialAppState = {
  isAppMounted: false,
  isSSR,
  isAppLoading: true
}
const AppContext = createContext(initialAppState)

export default AppContext
