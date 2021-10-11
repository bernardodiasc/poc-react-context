import * as React from 'react'
import { shallow } from 'enzyme'

import SiteMetadata from './SiteMetadata.js'

it('renders without crashing', () => {
  const component = shallow(<SiteMetadata />)
  expect(component).toMatchSnapshot()
})
