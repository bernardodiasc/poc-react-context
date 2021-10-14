import * as React from 'react'

import Panel from '../Panel'
import LinkRow from '../LinkRow'

import * as styles from './AllRoutes.module.css'

import links from '@dev/fixtures/routes-and-screens.json'

const AllRoutes = ({ children, AppLink }) => {
  return (
    <Panel title="All Routes">
      {links.map(link => (
        <LinkRow
          AppLink={AppLink}
          to={link.to}
          screenshot={link.screenshot}
          state={link.state}
          key={`${link.to}-${link.screenshot}`}
        />
      ))}
    </Panel>
  )
}

export default AllRoutes
