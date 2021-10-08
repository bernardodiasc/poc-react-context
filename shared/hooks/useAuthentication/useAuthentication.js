import { useState, useEffect } from 'react'

import { useAppContext } from '@contexts/App'
import { isSSR } from '@utils/helpers'

function useAuthentication () {
  const [logged, setLogged] = useState(null)
  const { logged: appLogged } = useAppContext()

  const checkPassword = async () => {
    const password = isSSR ? undefined : window.prompt('What\'s the password?', '')
    // Super secure authentication!
    if (password === 'x-team') {
      setLogged(true)
    }
  }

  useEffect(() => {
    const checkAuthentication = () => {
      if (appLogged !== undefined) {
        setLogged(appLogged)
        return
      }
      checkPassword()
    }
    checkAuthentication()
  }, [appLogged])

  return {
    logged
  }
}

export default useAuthentication
