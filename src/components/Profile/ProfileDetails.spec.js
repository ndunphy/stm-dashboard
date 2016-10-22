import React from 'react'
import ReactDOM from 'react-dom'
import ProfileDetails from './ProfileDetails'

describe('<ProfileDetails />', () => {
  it('renders without crashing', () => {
    const profile = {}
    const div = document.createElement('div')
    ReactDOM.render(<ProfileDetails profile={profile} />, div)
  })
})