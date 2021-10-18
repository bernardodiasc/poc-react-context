import React, { createContext } from 'react'

const initialDebugToolsState = {
  isMobile: false,
}
const DebugToolsContext = createContext(initialDebugToolsState)

export default DebugToolsContext
