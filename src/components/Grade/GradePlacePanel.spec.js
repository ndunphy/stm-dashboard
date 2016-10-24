import React from 'react'
import ReactDOM from 'react-dom'
import GradePlacePanel from './GradePlacePanel'

describe('<GradePlacePanel />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<GradePlacePanel />, div)
  })
})