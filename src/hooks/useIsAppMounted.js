import { useState, useEffect } from 'react'

function useIsAppMounted () {
  const [isAppMounted, setIsAppMounted] = useState(false)

  useEffect(() => {
    setIsAppMounted(true)
  }, [setIsAppMounted])

  return { isAppMounted, setIsAppMounted }
}

export default useIsAppMounted
