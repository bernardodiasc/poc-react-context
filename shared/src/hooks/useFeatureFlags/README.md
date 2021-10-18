# useFeatureFlags Hook

## How to use

```
import useFeatureFlags from '@hooks/useFeatureFlags'

const SampleComponent = () => {
  const { anything } = useFeatureFlags()
  return (
    <div>{`Just ${anything} here`}</div>
  )
}
```
