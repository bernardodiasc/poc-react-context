import { useEffect, useState } from 'react'

import { useAppContext } from '@containers/AppContainer'
import { request as api } from '@utils/api-helpers'

export default function useFeatureFlags () {
  const [features, setFeatures] = useState(null)
  const { features: appFeatures } = useAppContext()

  const fetchFeatureFlags = async (setFeatures) => {
    try {
      const response = await api.get('/feature-flags')
      if (response.status === 200) {
        const enabledFeatureflags = response.data.reduce(
          (acc, cur) => (cur.enabled ? { ...acc, [cur.flag]: true } : acc),
          {}
        )
        setFeatures(enabledFeatureflags)
      }
    } catch (error) {
      console.error(error)
      setFeatures({})
    }
  }

  useEffect(() => {
    const fetch = () => {
      if (appFeatures !== undefined) {
        setFeatures(appFeatures)
        return
      }
      fetchFeatureFlags(setFeatures)
    }
    fetch()
  }, [])

  return {
    features
  }
}
