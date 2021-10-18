import * as React from 'react'
import { shallow } from 'enzyme'

import AppLinkFallback from './AppLinkFallback.js'

it('renders without crashing', () => {
  const component = shallow(<AppLinkFallback />)
  expect(component).toMatchSnapshot()
})
