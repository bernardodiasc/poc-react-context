import * as React from 'react'
import { Link } from  'gatsby'

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/">/</Link></li>
      <li><Link to="/404">/404</Link></li>
      <li><Link to="/signup">/signup</Link></li>
      <li><Link to="/signup/experience">/signup/experience</Link></li>
      <li><Link to="/signup/about">/signup/about</Link></li>
      <li><Link to="/signup/404">/signup/404</Link></li>
      <li><Link to="/jobs">/jobs</Link></li>
      <li><Link to="/jobs/my-applications">/jobs/my-applications</Link></li>
      <li><Link to="/jobs/:job-name">/jobs/:job-name</Link></li>
      <li><Link to="/jobs/404">/jobs/404</Link></li>
      <li><Link to="/activate">/activate</Link></li>
      <li><Link to="/applicant">/applicant</Link></li>
      <li><Link to="/forgot-password">/forgot-password</Link></li>
      <li><Link to="/forgot-secret">/forgot-secret</Link></li>
      <li><Link to="/reset-password">/reset-password</Link></li>
      <li><Link to="/settings">/settings</Link></li>
      <li><Link to="/whitelabel">/whitelabel</Link></li>
      <li><Link to="/unsubscribe">/unsubscribe</Link></li>
      <li><Link to="/unsubscribe/job-alerts">/unsubscribe/job-alerts</Link></li>
      <li><Link to="/feedback">/feedback</Link></li>
      <li><Link to="/feedback/already-received">/feedback/already-received</Link></li>
      <li><Link to="/feedback/error">/feedback/error</Link></li>
    </ul>
  </nav>
)

export default Navigation
