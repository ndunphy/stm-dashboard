import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('<App />', () => {
  let wrapper
  let routes = React.createElement('')
  let history = {}

  beforeEach(() => {
    wrapper = shallow(<App history={history} routes={routes} />)
  })

  it('has a Router component', () => {
    expect(wrapper.find('Router')).toBeDefined()
  })

  it('passes a history prop', () => {
    const props = wrapper.find('Router').props()
    expect(props.history).toBeDefined()
  })
})