import * as React from 'react'
import { shallow } from 'enzyme'

import Navigation from './Navigation.js'

it('renders without crashing', () => {
  const component = shallow(<Navigation />)
  expect(component).toMatchSnapshot()
})
