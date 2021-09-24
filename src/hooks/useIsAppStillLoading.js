import { useState, useEffect } from 'react'

// This is just an example of an event that blocks the screen.
// The hook itself is not responsible to update the render, what it does
// is responde with it's state once it gets updated.

function useIsAppStillLoading () {
  const [isAppStillLoading, setIsAppStillLoading] = useState(true)
  useEffect(() => {
    console.log(isAppStillLoading)
    if (isAppStillLoading) {
      const loader = setTimeout(() => {
        setIsAppStillLoading(false)
      }, 3000)
      return () => clearTimeout(loader)
    }
  }, [isAppStillLoading, setIsAppStillLoading])

  return { isAppStillLoading, setIsAppStillLoading }
}

export default useIsAppStillLoading
