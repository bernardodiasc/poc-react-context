import * as React from 'react'
import { shallow } from 'enzyme'

import RouteDetails from './RouteDetails.js'

it('renders without crashing', () => {
  const component = shallow(<RouteDetails />)
  expect(component).toMatchSnapshot()
})
