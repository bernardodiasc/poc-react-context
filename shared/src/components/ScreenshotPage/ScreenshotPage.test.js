import * as React from 'react'
import { shallow } from 'enzyme'

import ScreenshotPage from './ScreenshotPage.js'

it('renders without crashing', () => {
  const component = shallow(<ScreenshotPage />)
  expect(component).toMatchSnapshot()
})
