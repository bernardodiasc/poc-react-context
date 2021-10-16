import * as React from 'react'
import { shallow } from 'enzyme'

import ScreenLink from './ScreenLink.js'

it('renders without crashing', () => {
  const component = shallow(<ScreenLink />)
  expect(component).toMatchSnapshot()
})
