import * as React from 'react'

import Panel from '../Panel'
import LinkRow from '../LinkRow'

import * as styles from './AllRoutesAndScreens.module.css'

const AllRoutesAndScreens = ({ AppLink, routes }) => {
  return (
    <Panel title="All Routes and Screens">
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

export default AllRoutesAndScreens
