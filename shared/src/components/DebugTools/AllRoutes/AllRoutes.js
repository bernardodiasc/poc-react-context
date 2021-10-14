import * as React from 'react'

import Panel from '../Panel'
import LinkRow from '../LinkRow'

import * as styles from './AllRoutes.module.css'

const AllRoutes = ({ AppLink, screens }) => {
  return (
    <Panel title="All Routes">
      {screens.map(screen => (
        <LinkRow
          AppLink={AppLink}
          to={screen.to}
          screenshot={screen.screenshot}
          state={screen.state}
          key={screen.screenshot}
        />
      ))}
    </Panel>
  )
}

export default AllRoutes
