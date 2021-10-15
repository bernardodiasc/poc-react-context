import * as React from 'react'
import { shallow } from 'enzyme'

import AllRoutesAndScreens from './AllRoutesAndScreens.js'

it('renders without crashing', () => {
  const component = shallow(<AllRoutesAndScreens />)
  expect(component).toMatchSnapshot()
})
