import React, { PropTypes } from 'react'
import AuthService from '../../utils/AuthService'
import './Landing.css'

export class Landing extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    auth: PropTypes.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      profile: props.auth.getProfile()
    }

    props.auth.on('profile_updated', profile => {
      this.setState({ profile: profile })
    })
  }

  logout() {
    this.props.auth.logout()
    this.context.router.push('/login')
  }

  render() {
    const { profile } = this.state
    return (
      <div className="root">
        Hi{profile.given_name ? ` ${profile.given_name}` : ''}, 
        welcome to the St. Thomas More Classroom Management System.
      </div>
    )
  }
}

export default Landing