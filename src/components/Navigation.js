import React, { useState } from 'react'

import NavigationLink from '@components/NavigationLink'

const styles = {
  nav: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    background: 'white',
    padding: '30px',
    border: '1px dashed',
    width: '200px',
    height: 'calc(100vh - 100px)',
    overflow: 'auto',
    opacity: '0.9',
  },
  ul: {
    margin: '1em 0 2.5em',
    padding: '0 0 0 1em',
    fontSize: '1.1rem',
    lineHeight: '1.4',
  },
  open: {
    position: 'absolute',
    top: '20px',
    right: '20px',
  },
  close: {
    position: 'absolute',
    top: '-1px',
    right: '-1px',
  },
}

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(true)
  const toggleNav = () => setIsExpanded(!isExpanded)
  return isExpanded ? (
    <nav style={styles.nav}>
      <button style={styles.close} onClick={toggleNav}>Close navigation</button>
      <details open>
        <summary>List of all routes in use in the <b>new</b> version on jobs site:</summary>
        <ul style={styles.ul}>
          <li><NavigationLink to="/" state={{ screenshot: 'Login - 1.png' }}>/</NavigationLink> (guest)</li>
          <li><NavigationLink to="/" state={{ screenshot: 'HomePage - Pre-Exclusives Launch.png' }}>/</NavigationLink> (authenticated)</li>
          <li><NavigationLink to="/" state={{ screenshot: 'HomePage - Pre-Exclusives Launch (1).png' }}>/</NavigationLink> (applied for a job)</li>

          <li><NavigationLink to="/404">/404</NavigationLink></li>
          <li><NavigationLink to="/signup" state={{ screenshot: 'Signup - 1.png' }}>/signup</NavigationLink></li>

          <li><NavigationLink to="/profile" state={{ screenshot: 'Profile - 3.png' }}>/profile</NavigationLink> (my profile)</li>
          <li><NavigationLink to="/profile" state={{ screenshot: 'ProfileEditor - 2.png' }}>/profile</NavigationLink> (overview)</li>
          <li><NavigationLink to="/profile" state={{ screenshot: 'ProfileEditor - 3.png' }}>/profile</NavigationLink> (header)</li>
          <li><NavigationLink to="/profile" state={{ screenshot: 'ProfileEditor - 4.png' }}>/profile</NavigationLink> (top skills)</li>
          <li><NavigationLink to="/profile" state={{ screenshot: 'ProfileEditor - 5.png' }}>/profile</NavigationLink> (introduction)</li>
          <li><NavigationLink to="/profile" state={{ screenshot: 'ProfileEditor - 6.png' }}>/profile</NavigationLink> (experiences)</li>
          <li><NavigationLink to="/profile" state={{ screenshot: 'ProfileEditor - 7.png' }}>/profile</NavigationLink> (xp title)</li>
          <li><NavigationLink to="/profile" state={{ screenshot: 'ProfileEditor - 8.png' }}>/profile</NavigationLink> (xp date)</li>
          <li><NavigationLink to="/profile" state={{ screenshot: 'ProfileEditor - 9.png' }}>/profile</NavigationLink> (xp skills)</li>
          <li><NavigationLink to="/profile" state={{ screenshot: 'ProfileEditor - 10.png' }}>/profile</NavigationLink> (xp highlights)</li>

          <li><NavigationLink to="/settings" state={{ screenshot: 'Settings - 1.png' }}>/settings</NavigationLink> (saved)</li>
          <li><NavigationLink to="/settings" state={{ screenshot: 'Settings - 2.png' }}>/settings</NavigationLink> (email)</li>
          <li><NavigationLink to="/settings" state={{ screenshot: 'Settings - 3.png' }}>/settings</NavigationLink> (password)</li>
          <li><NavigationLink to="/settings" state={{ screenshot: 'Settings - 4.png' }}>/settings</NavigationLink> (notifications)</li>
          <li><NavigationLink to="/settings" state={{ screenshot: 'Settings - 5.png' }}>/settings</NavigationLink> (rate)</li>
          <li><NavigationLink to="/settings" state={{ screenshot: 'Settings - 6.png' }}>/settings</NavigationLink> (roles)</li>

          <li><NavigationLink to="/exclusives">/exclusives</NavigationLink></li>

          <li><NavigationLink to="/applications" state={{ screenshot: 'Applications - In Review.png' }}>/applications</NavigationLink></li>
        </ul>
      </details>
      <details>
        <summary>List of all routes in use in the <b>current</b> version on jobs site:</summary>
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
      </details>
    </nav>
  ) : <button style={styles.open} onClick={toggleNav}>Open navigation</button>
}

export default Navigation
