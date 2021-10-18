# App Context

## How to use

```
import useAppContext, { AppProvider } from '@contexts/App'

const SampleComponent = () => {
  const { anything } = useAppContext()
  return (
    <div>{`Just ${anything} here`}</div>
  )
}

export const SampleComponentWrapper = () => (
  <AppProvider anything={true}>
    <SampleComponent />
  </AppProvider>
)
```

> - The Context Provider must be wrapping some part of the render tree.
> - No need to import `AppContext`, use the hook `useAppContext`.
