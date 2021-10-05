import { useState, useEffect } from 'react'

// > If you intentionally need to render something different
// > on the server and the client, you can do a two-pass rendering.
// Quote from https://reactjs.org/docs/react-dom.html

function useIsAppMounted () {
  const [isAppMounted, setIsAppMounted] = useState(false)

  useEffect(() => {
    setIsAppMounted(true)
  }, [setIsAppMounted])

  return { isAppMounted, setIsAppMounted }
}

export default useIsAppMounted
