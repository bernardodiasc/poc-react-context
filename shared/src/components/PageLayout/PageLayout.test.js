import React from 'react'
import { shallow } from 'enzyme'

import PageLayout from './PageLayout.js'

it('renders without crashing', () => {
  const component = shallow(<PageLayout />)
  expect(component).toMatchSnapshot()
})
