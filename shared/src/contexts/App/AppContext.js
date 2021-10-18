import { createContext } from 'react'

import { isSSR } from '@utils/helpers'

const initialAppState = {
  isAppMounted: false,
  isSSR
}
const AppContext = createContext(initialAppState)

export default AppContext
