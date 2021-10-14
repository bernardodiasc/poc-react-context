import * as React from 'react'
import { shallow } from 'enzyme'

import LinkRow from './LinkRow.js'

it('renders without crashing', () => {
  const component = shallow(<LinkRow />)
  expect(component).toMatchSnapshot()
})
