import * as React from 'react'
import { shallow } from 'enzyme'

import AllRoutes from './AllRoutes.js'

it('renders without crashing', () => {
  const component = shallow(<AllRoutes />)
  expect(component).toMatchSnapshot()
})
