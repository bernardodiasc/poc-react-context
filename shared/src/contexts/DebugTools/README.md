# DebugTools Context

## How to use

```
import useDebugToolsContext, { DebugToolsProvider } from '@contexts/DebugTools'

const SampleComponent = () => {
  const { anything } = useDebugToolsContext()
  return (
    <div>{`Just ${anything} here`}</div>
  )
}

export const SampleComponentWrapper = () => (
  <DebugToolsProvider anything={true}>
    <SampleComponent />
  </DebugToolsProvider>
)
```

> - The Context Provider must be wrapping some part of the render tree.
> - No need to import `DebugToolsContext`, use the hook `useDebugToolsContext`.
