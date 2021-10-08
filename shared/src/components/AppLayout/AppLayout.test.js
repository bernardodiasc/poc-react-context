import React from 'react'
import { shallow } from 'enzyme'

import AppLayout from './AppLayout.js'

it('renders without crashing', () => {
  const component = shallow(<AppLayout />)
  expect(component).toMatchSnapshot()
})
