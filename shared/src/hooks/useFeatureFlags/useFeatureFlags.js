import { useEffect, useCallback } from 'react'
import axios from 'axios'
import useSWR from 'swr'

const ENDPOINT = 'http://localhost:1337/feature-flags'

async function getFeatureFlags () {
  const { data: features } = await axios.get(ENDPOINT)
  return reduceEnabledFeatureFlags(features)
}

function reduceEnabledFeatureFlags (features) {
  return features && features.reduce(
    (acc, cur) => cur.enabled ? { ...acc, [cur.flag]: true } : acc, {}
  )
}

function useFeatureFlags () {
  const { data, error } = useSWR(ENDPOINT)

  const getEnabledFeatures = useCallback(
    reduceEnabledFeatureFlags,
    [data]
  )

  return {
    features: getEnabledFeatures(data),
    isLoading: !error && !data,
    isError: error
  }
}

export default useFeatureFlags
export { getFeatureFlags }
