import * as React from 'react'
import { shallow } from 'enzyme'

import RoutesAndScreensDetails from './RoutesAndScreensDetails.js'

it('renders without crashing', () => {
  const component = shallow(<RoutesAndScreensDetails />)
  expect(component).toMatchSnapshot()
})
