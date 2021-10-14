import React, { useContext } from 'react'

import DebugToolsContext from './DebugToolsContext'

// Safely guarded useDebugToolsContext hook
const useDebugToolsContext = () => {
  const context = useContext(DebugToolsContext)

  if (!context) {
    return console.erro('This hook should be wraped by DebugToolsProvider')
  }

  return context
}

export default useDebugToolsContext
