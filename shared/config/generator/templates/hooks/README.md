# use<%= componentName %> Hook

## How to use

```
import { use<%= componentName %> } from '@<%= componentType %>/<%= componentPath %>'

const SampleComponent = () => {
  const { anything } = use<%= componentName %>()
  return (
    <div>{`Just ${anything} here`}</div>
  )
}
