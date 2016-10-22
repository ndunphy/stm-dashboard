import React, { PropTypes as T } from 'react'
import AuthService from '../../utils/AuthService'
import './Login.css'

export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    return (
      <div className="root">
        Please login to access the classroom management system.
      </div>
    )
  }
}

export default Login