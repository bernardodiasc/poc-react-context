import React from 'react'
import { shallow } from 'enzyme'

import Gliphs from './Gliphs.js'

it('renders without crashing', () => {
  const component = shallow(<Gliphs />)
  expect(component).toMatchSnapshot()
})
