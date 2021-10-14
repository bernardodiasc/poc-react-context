import * as React from 'react'

import Panel from '../Panel'
import LinkRow from '../LinkRow'

import * as styles from './AllRoutes.module.css'

const AllRoutes = ({ children, AppLink }) => {
  return (
    <Panel title="All Routes">
      <LinkRow
        AppLink={AppLink}
        to="/"
        screenshot="Login-1.png"
        state="(guest)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/"
        screenshot="HomePage-Pre-ExclusivesLaunch.png"
        state="(authenticated)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/"
        screenshot="HomePage-Pre-ExclusivesLaunch(1).png"
        state="(applied for a job)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/404"
        screenshot=""
        state=""
      />
      <LinkRow
        AppLink={AppLink}
        to="/signup"
        screenshot="Signup-1.png"
        state=""
      />
      <LinkRow
        AppLink={AppLink}
        to="/profile"
        screenshot="Profile-3.png"
        state="(my profile)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/profile"
        screenshot="ProfileEditor-2.png"
        state="(overview)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/profile"
        screenshot="ProfileEditor-3.png"
        state="(header)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/profile"
        screenshot="ProfileEditor-4.png"
        state="(top skills)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/profile"
        screenshot="ProfileEditor-5.png"
        state="(introduction)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/profile"
        screenshot="ProfileEditor-6.png"
        state="(experiences)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/profile"
        screenshot="ProfileEditor-7.png"
        state="(xp title)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/profile"
        screenshot="ProfileEditor-8.png"
        state="(xp date)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/profile"
        screenshot="ProfileEditor-9.png"
        state="(xp skills)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/profile"
        screenshot="ProfileEditor-10.png"
        state="(xp highlights)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/settings"
        screenshot="Settings-1.png"
        state="(saved)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/settings"
        screenshot="Settings-2.png"
        state="(email)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/settings"
        screenshot="Settings-3.png"
        state="(password)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/settings"
        screenshot="Settings-4.png"
        state="(notifications)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/settings"
        screenshot="Settings-5.png"
        state="(rate)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/settings"
        screenshot="Settings-6.png"
        state="(roles)"
      />
      <LinkRow
        AppLink={AppLink}
        to="/exclusives"
        screenshot="Exclusives-23.png"
        state=""
      />
      <LinkRow
        AppLink={AppLink}
        to="/applications"
        screenshot="Applications-InReview.png"
        state=""
      />
    </Panel>
  )
}

export default AllRoutes
