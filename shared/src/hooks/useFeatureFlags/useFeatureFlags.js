import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import useAppContext from '@contexts/App'

function useFeatureFlags () {
  return useQuery(
    'feature-flags',
    async () => {
      try {
        const result = await fetch('http://localhost:1337/feature-flags')
        return result.json()
      } catch (error) {
        throw new Error(error)
      }
    }
  )
}

export default useFeatureFlags
