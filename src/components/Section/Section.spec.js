import React from 'react'
import ReactDOM from 'react-dom'
import Section from './Section'

describe('<Section />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Section />, div)
  })
})