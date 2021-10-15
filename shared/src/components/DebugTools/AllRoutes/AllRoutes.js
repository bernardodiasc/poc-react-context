import * as React from 'react'

import Panel from '../Panel'
import LinkRow from '../LinkRow'

import * as styles from './AllRoutes.module.css'

const AllRoutes = ({ AppLink, routes }) => {
  return (
    <Panel title="All Routes">
      {Object.keys(routes).map(key => (
        <LinkRow
          AppLink={AppLink}
          to={key}
          key={key}
        />
      ))}
    </Panel>
  )
}

export default AllRoutes
