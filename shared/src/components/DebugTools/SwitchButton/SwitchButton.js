import React, { useState } from 'react'
import Switch from 'react-switch'

const SwitchButton = ({ onClick, checked }) => {
  const [isChecked, setIsChecked] = useState(Boolean(checked))
  const toggleChecked = () => {
    onClick && onClick()
    setIsChecked(!isChecked)
  }
  return (
    <Switch onChange={toggleChecked} checked={isChecked} />
  )
}

export default SwitchButton
