import * as React from 'react'
import { shallow } from 'enzyme'

import Panel from './Panel.js'

it('renders without crashing', () => {
  const component = shallow(<Panel />)
  expect(component).toMatchSnapshot()
})
