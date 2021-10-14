import React, { useState } from 'react'

import Panel from '../Panel'
import LabelRow from '../LabelRow'
import SwitchButton from '../SwitchButton'

import * as styles from './ScreenConfig.module.css'

const ScreenConfig = ({ children }) => {
  const [isMobile, setIsMobile] = useState(true)
  const toggleMobile = () => setIsMobile(!isMobile)
  return (
    <Panel title="Debug Config">
      <LabelRow label="Mobile viewport">
        <SwitchButton onClick={toggleMobile} />
      </LabelRow>
    </Panel>
  )
}

export default ScreenConfig
