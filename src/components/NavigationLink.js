import * as React from 'react'
import { Link } from  'gatsby'

const styles = {
  fontSize: '1.1rem',
  lineHeight: '1.5',
}

const NavigationLink = ({ children, to }) => (
  <span style={styles}>
    <Link to={to}>
      {children}
    </Link>
  </span>
)

export default NavigationLink
