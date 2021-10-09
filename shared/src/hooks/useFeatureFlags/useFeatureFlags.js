import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { useAppContext } from '@contexts/App'
import { request as api } from '@utils/api-helpers'

function useFeatureFlags () {
  return useQuery(
    'feature-flags',
    () => fetch('http://localhost:1337/feature-flags').then(res => res.json())
  )
}

export default useFeatureFlags
