import * as React from 'react'
import { shallow } from 'enzyme'

import RouteLink from './RouteLink.js'

it('renders without crashing', () => {
  const component = shallow(<RouteLink />)
  expect(component).toMatchSnapshot()
})
