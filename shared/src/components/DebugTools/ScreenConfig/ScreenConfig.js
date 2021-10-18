import React from 'react'

import Panel from '../Panel'
import LabelRow from '../LabelRow'
import SwitchButton from '../SwitchButton'

import * as styles from './ScreenConfig.module.css'

const ScreenConfig = ({ isMobile, toggleMobile }) => {
  return (
    <Panel title="Debug Config">
      <LabelRow label="Mobile viewport">
        <SwitchButton onClick={toggleMobile} checked={isMobile} />
      </LabelRow>
    </Panel>
  )
}

export default ScreenConfig
