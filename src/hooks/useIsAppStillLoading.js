import { useState, useEffect } from 'react'

// This is just an example of an event that blocks the screen.
// The hook itself is not responsible to update the render, what it does
// is responde with it's state once it gets updated.

function useIsAppStillLoading (ms) {
  const [isAppStillLoading, setIsAppStillLoading] = useState(true)
  useEffect(() => {
    const delay = () => {
      let id
      const promise = new Promise(resolve => {
        id = setTimeout(resolve, ms)
      })
      return { id, promise }
    }

    async function simulateDataFetching() {
      if (isAppStillLoading) {
        const { id, promise } = delay(ms)
        try {
          await promise
          setIsAppStillLoading(false)
        } catch (error) {
          clearTimeout(id)
        }
        return () => clearTimeout(id)
      }
    }
    simulateDataFetching()
  }, [isAppStillLoading, setIsAppStillLoading])

  return { isAppStillLoading, setIsAppStillLoading }
}

export default useIsAppStillLoading
