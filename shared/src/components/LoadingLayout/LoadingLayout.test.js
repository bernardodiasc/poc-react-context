import React from 'react'
import { shallow } from 'enzyme'

import LoadingLayout from './LoadingLayout.js'

it('renders without crashing', () => {
  const component = shallow(<LoadingLayout />)
  expect(component).toMatchSnapshot()
})
