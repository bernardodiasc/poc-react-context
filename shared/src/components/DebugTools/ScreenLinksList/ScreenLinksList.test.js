import * as React from 'react'
import { shallow } from 'enzyme'

import ScreenLinksList from './ScreenLinksList.js'

it('renders without crashing', () => {
  const component = shallow(<ScreenLinksList />)
  expect(component).toMatchSnapshot()
})
