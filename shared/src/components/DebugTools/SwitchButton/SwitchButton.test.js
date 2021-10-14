import * as React from 'react'
import { shallow } from 'enzyme'

import SwitchButton from './SwitchButton.js'

it('renders without crashing', () => {
  const component = shallow(<SwitchButton />)
  expect(component).toMatchSnapshot()
})
