import React from 'react'
import ReactDOM from 'react-dom'
import SectionListGroup from './SectionListGroup'

describe('<Section />', () => {
  it('renders without crashing', () => {
    const section = {}
    const div = document.createElement('div')
    ReactDOM.render(<SectionListGroup section={section}/>, div)
  })
})