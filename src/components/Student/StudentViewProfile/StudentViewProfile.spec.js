import React from 'react'
import ReactDOM from 'react-dom'
import StudentViewProfile from './StudentViewProfile'

describe('<StudentViewProfile />', () => {
  it('renders without crashing', () => {
    const student = {}
    const div = document.createElement('div')
    ReactDOM.render(<StudentViewProfile student={student}/>, div)
  })
})
