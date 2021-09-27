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

const newRoutesAndScreens = [
  {
    to: "/",
    screenshot: 'Login-1.png',
    title: "/",
    label: "(guest)",
  },
  {
    to: "/",
    screenshot: 'HomePage-Pre-ExclusivesLaunch.png',
    title: "/",
    label: "(authenticated)",
  },
  {
    to: "/",
    screenshot: 'HomePage-Pre-ExclusivesLaunch(1).png',
    title: "/",
    label: "(applied for a job)",
  },
  {
    to: "/404",
    title: "/404",
    label: "",
  },
  {
    to: "/signup",
    screenshot: 'Signup-1.png',
    title: "/signup",
    label: "",
  },
  {
    to: "/profile",
    screenshot: 'Profile-3.png',
    title: "/profile",
    label: "(my profile)",
  },
  {
    to: "/profile",
    screenshot: 'ProfileEditor-2.png',
    title: "/profile",
    label: "(overview)",
  },
  {
    to: "/profile",
    screenshot: 'ProfileEditor-3.png',
    title: "/profile",
    label: "(header)",
  },
  {
    to: "/profile",
    screenshot: 'ProfileEditor-4.png',
    title: "/profile",
    label: "(top skills)",
  },
  {
    to: "/profile",
    screenshot: 'ProfileEditor-5.png',
    title: "/profile",
    label: "(introduction)",
  },
  {
    to: "/profile",
    screenshot: 'ProfileEditor-6.png',
    title: "/profile",
    label: "(experiences)",
  },
  {
    to: "/profile",
    screenshot: 'ProfileEditor-7.png',
    title: "/profile",
    label: "(xp title)",
  },
  {
    to: "/profile",
    screenshot: 'ProfileEditor-8.png',
    title: "/profile",
    label: "(xp date)",
  },
  {
    to: "/profile",
    screenshot: 'ProfileEditor-9.png',
    title: "/profile",
    label: "(xp skills)",
  },
  {
    to: "/profile",
    screenshot: 'ProfileEditor-10.png',
    title: "/profile",
    label: "(xp highlights)",
  },
  {
    to: "/settings",
    screenshot: 'Settings-1.png',
    title: "/settings",
    label: "(saved)",
  },
  {
    to: "/settings",
    screenshot: 'Settings-2.png',
    title: "/settings",
    label: "(email)",
  },
  {
    to: "/settings",
    screenshot: 'Settings-3.png',
    title: "/settings",
    label: "(password)",
  },
  {
    to: "/settings",
    screenshot: 'Settings-4.png',
    title: "/settings",
    label: "(notifications)",
  },
  {
    to: "/settings",
    screenshot: 'Settings-5.png',
    title: "/settings",
    label: "(rate)",
  },
  {
    to: "/settings",
    screenshot: 'Settings-6.png',
    title: "/settings",
    label: "(roles)",
  },
  {
    to: "/exclusives",
    screenshot: 'Exclusives-23.png',
    title: "/exclusives",
    label: "",
  },
  {
    to: "/applications",
    screenshot: 'Applications-InReview.png',
    title: "/applications",
    label: "",
  },
]

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(true)
  const toggleNav = () => setIsExpanded(!isExpanded)
  return isExpanded ? (
    <nav style={styles.nav}>
      <button style={styles.close} onClick={toggleNav}>Close debug panel</button>
      <details open>
        <summary>List of all routes in use in the <b>new</b> version on jobs site:</summary>
        <ul style={styles.ul}>
          {newRoutesAndScreens.map(link =>
            <li><NavigationLink to={link.to} state={{ screenshot: link.screenshot }}>{link.title}</NavigationLink> {link.label}</li>)}
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
  ) : <button style={styles.open} onClick={toggleNav}>Open debug panel</button>
}

export default Navigation
