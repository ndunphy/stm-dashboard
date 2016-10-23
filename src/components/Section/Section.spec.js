import React from 'react'
import ReactDOM from 'react-dom'
import Section from './Section'

describe('<Section />', () => {
  it('renders without crashing', () => {
    const section = {}
    const div = document.createElement('div')
    ReactDOM.render(<Section section={section}/>, div)
  })
})