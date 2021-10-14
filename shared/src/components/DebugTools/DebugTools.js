import React, { useState } from 'react'

import Panel from './Panel'
import RouteDetails from './RouteDetails'
import LinkRow from './LinkRow'
import LabelRow from './LabelRow'
import SwitchButton from './SwitchButton'

import * as styles from './DebugTools.module.css'

const DebugTools = () => {
  const [isMobile, setIsMobile] = useState(true)
  const toggleMobile = () => setIsMobile(!isMobile)

  // const renderNavList = (items) => items
  //   .sort((a, b) => a.to.toLowerCase().localeCompare(b.to.toLowerCase()))
  //   .map((link, key) => (
  //     <li key={`item-${key}`}>
  //       <LinkRow to={link.to} state={{ screenshot: link.screenshot }}>
  //         {link.title || link.to}
  //       </LinkRow>
  //       {link.label && (
  //         <span> {link.label}</span>
  //       )}
  //     </li>
  //   ))

  return (
    <aside className={styles.component}>
      <Panel title="Debug Config">
        <LabelRow label="Mobile viewport">
          <SwitchButton onClick={toggleMobile} />
        </LabelRow>
      </Panel>

      <Panel title="Route Details">
        <RouteDetails />
      </Panel>

      <Panel title="All Routes">
        <LinkRow
          to="/"
          screenshot="Login-1.png"
          state="(guest)"
        />
        <LinkRow
          to="/"
          screenshot="HomePage-Pre-ExclusivesLaunch.png"
          state="(authenticated)"
        />
        <LinkRow
          to="/"
          screenshot="HomePage-Pre-ExclusivesLaunch(1).png"
          state="(applied for a job)"
        />
        <LinkRow
          to="/404"
          screenshot=""
          state=""
        />
        <LinkRow
          to="/signup"
          screenshot="Signup-1.png"
          state=""
        />
        <LinkRow
          to="/profile"
          screenshot="Profile-3.png"
          state="(my profile)"
        />
        <LinkRow
          to="/profile"
          screenshot="ProfileEditor-2.png"
          state="(overview)"
        />
        <LinkRow
          to="/profile"
          screenshot="ProfileEditor-3.png"
          state="(header)"
        />
        <LinkRow
          to="/profile"
          screenshot="ProfileEditor-4.png"
          state="(top skills)"
        />
        <LinkRow
          to="/profile"
          screenshot="ProfileEditor-5.png"
          state="(introduction)"
        />
        <LinkRow
          to="/profile"
          screenshot="ProfileEditor-6.png"
          state="(experiences)"
        />
        <LinkRow
          to="/profile"
          screenshot="ProfileEditor-7.png"
          state="(xp title)"
        />
        <LinkRow
          to="/profile"
          screenshot="ProfileEditor-8.png"
          state="(xp date)"
        />
        <LinkRow
          to="/profile"
          screenshot="ProfileEditor-9.png"
          state="(xp skills)"
        />
        <LinkRow
          to="/profile"
          screenshot="ProfileEditor-10.png"
          state="(xp highlights)"
        />
        <LinkRow
          to="/settings"
          screenshot="Settings-1.png"
          state="(saved)"
        />
        <LinkRow
          to="/settings"
          screenshot="Settings-2.png"
          state="(email)"
        />
        <LinkRow
          to="/settings"
          screenshot="Settings-3.png"
          state="(password)"
        />
        <LinkRow
          to="/settings"
          screenshot="Settings-4.png"
          state="(notifications)"
        />
        <LinkRow
          to="/settings"
          screenshot="Settings-5.png"
          state="(rate)"
        />
        <LinkRow
          to="/settings"
          screenshot="Settings-6.png"
          state="(roles)"
        />
        <LinkRow
          to="/exclusives"
          screenshot="Exclusives-23.png"
          state=""
        />
        <LinkRow
          to="/applications"
          screenshot="Applications-InReview.png"
          state=""
        />
      </Panel>
    </aside>
  )
}

export default DebugTools
