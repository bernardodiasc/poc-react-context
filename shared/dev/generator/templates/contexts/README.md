# <%= componentName %> Context

## How to use

```
import use<%= componentName %>Context, { <%= componentName %>Provider } from '@<%= componentType %>/<%= componentPath %>'

const SampleComponent = () => {
  const { anything } = use<%= componentName %>Context()
  return (
    <div>{`Just ${anything} here`}</div>
  )
}

export const SampleComponentWrapper = () => (
  <<%= componentName %>Provider anything={true}>
    <SampleComponent />
  </<%= componentName %>Provider>
)
```

> - The Context Provider must be wrapping some part of the render tree.
> - No need to import `<%= componentName %>Context`, use the hook `use<%= componentName %>Context`.
