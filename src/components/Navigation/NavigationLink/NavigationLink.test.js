import * as React from 'react'
import { shallow } from 'enzyme'

import NavigationLink from './NavigationLink.js'

it('renders without crashing', () => {
  const component = shallow(<NavigationLink />)
  expect(component).toMatchSnapshot()
})
