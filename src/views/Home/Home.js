import React, { PropTypes } from 'react'
import { Button } from 'react-bootstrap'
import AuthService from '../../utils/AuthService'
import ProfileDetails from '../../components/Profile/ProfileDetails'
import styles from './Home.css'

export class Home extends React.Component {
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
      <div className={styles.root}>
        <h2>Home</h2>
        <ProfileDetails profile={profile}></ProfileDetails>
        <Button onClick={this.logout.bind(this)}>Logout</Button>
      </div>
    )
  }
}

export default Home