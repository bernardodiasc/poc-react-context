import React from 'react'

import DebugTools from '@components/DebugTools'
import useAppContext from '@contexts/App'
import useDebugToolsContext from '@contexts/DebugTools'

const DebugToolsContainer = () => {
  const appContext = useAppContext()
  const debugToolsContext = useDebugToolsContext()
  return (
    <DebugTools {...appContext} {...debugToolsContext} />
  )
}

export default DebugToolsContainer
