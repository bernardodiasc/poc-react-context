# useIsAppMounted Hook

## How to use

```
import useIsAppMounted from '@hooks/useIsAppMounted'

const SampleComponent = () => {
  const { isAppMounted } = useIsAppMounted()
  return isAppMounted ? (
    <div>This is JS version</div>
  ) : (
    <div>This is non-JS version</div>
  )
}
```
