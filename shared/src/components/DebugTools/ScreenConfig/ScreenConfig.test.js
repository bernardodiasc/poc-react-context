import * as React from 'react'
import { shallow } from 'enzyme'

import ScreenConfig from './ScreenConfig.js'

it('renders without crashing', () => {
  const component = shallow(<ScreenConfig />)
  expect(component).toMatchSnapshot()
})
