import * as React from 'react'
import { Link } from  'gatsby'

const styles = {
  active: {
    fontWeight: 'bold',
  }
}

const NavigationLink = ({ children, to, state }) => (
  <Link
    to={to}
    activeStyle={styles.active}
    // partiallyActive={true}
    state={state}
  >
    {children}
  </Link>
)

export default NavigationLink
