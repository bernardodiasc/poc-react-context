import * as React from 'react'
import { shallow } from 'enzyme'

import LabelRow from './LabelRow.js'

it('renders without crashing', () => {
  const component = shallow(<LabelRow />)
  expect(component).toMatchSnapshot()
})
