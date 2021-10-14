import { useEffect, useCallback } from 'react'
import useSWR from 'swr'

function useFeatureFlags () {
  const { data, error } = useSWR('http://localhost:1337/feature-flags')

  const getEnabledFeatures = useCallback(
    data => data?.reduce(
      (acc, cur) => cur.enabled ? { ...acc, [cur.flag]: true } : acc, {}
    ),
    [data]
  )

  return {
    features: getEnabledFeatures(data),
    isLoading: !error && !data,
    isError: error
  }
}

export default useFeatureFlags
