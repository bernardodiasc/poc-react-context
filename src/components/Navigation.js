import * as React from 'react'

import NavigationLink from '@components/NavigationLink'

const styles = {
  nav: {
    position: 'absolute',
    bottom: '30px',
    left: '30px',
    background: 'white',
    padding: '2em',
    border: '1px dashed',
    width: '250px',
    height: '300px',
    overflow: 'auto',
  },
  ul: {
    margin: '0',
    padding: '0 0 0 1em',
  },
}

const Navigation = () => (
  <nav style={styles.nav}>
    List of all routes in use in the current version on jobs site:
    <br /><br />
    <ul style={styles.ul}>
      <li><NavigationLink to="/">/</NavigationLink></li>
      <li><NavigationLink to="/404">/404</NavigationLink></li>
      <li><NavigationLink to="/signup">/signup</NavigationLink></li>
      <li><NavigationLink to="/signup/experience">/signup/experience</NavigationLink></li>
      <li><NavigationLink to="/signup/about">/signup/about</NavigationLink></li>
      <li><NavigationLink to="/signup/404">/signup/404</NavigationLink></li>
      <li><NavigationLink to="/jobs">/jobs</NavigationLink></li>
      <li><NavigationLink to="/jobs/my-applications">/jobs/my-applications</NavigationLink></li>
      <li><NavigationLink to="/jobs/:job-name">/jobs/:job-name</NavigationLink></li>
      <li><NavigationLink to="/jobs/404">/jobs/404</NavigationLink></li>
      <li><NavigationLink to="/activate">/activate</NavigationLink></li>
      <li><NavigationLink to="/applicant">/applicant</NavigationLink></li>
      <li><NavigationLink to="/forgot-password">/forgot-password</NavigationLink></li>
      <li><NavigationLink to="/forgot-secret">/forgot-secret</NavigationLink></li>
      <li><NavigationLink to="/reset-password">/reset-password</NavigationLink></li>
      <li><NavigationLink to="/settings">/settings</NavigationLink></li>
      <li><NavigationLink to="/whitelabel">/whitelabel</NavigationLink></li>
      <li><NavigationLink to="/unsubscribe">/unsubscribe</NavigationLink></li>
      <li><NavigationLink to="/unsubscribe/job-alerts">/unsubscribe/job-alerts</NavigationLink></li>
      <li><NavigationLink to="/feedback">/feedback</NavigationLink></li>
      <li><NavigationLink to="/feedback/already-received">/feedback/already-received</NavigationLink></li>
      <li><NavigationLink to="/feedback/error">/feedback/error</NavigationLink></li>
    </ul>
  </nav>
)

export default Navigation
