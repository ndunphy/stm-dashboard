import React, { PropTypes } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap'

export class ProfileDetails extends React.Component {
  static propTypes = {
    profile: PropTypes.object
  }

  render() {
    const { profile } = this.props
    return (
      <Grid>
        <Row>
          <Col md={2} mdOffset={4}>
            <Image src={profile.picture} circle responsive/>
          </Col>
          <Col md={5}>
            <h3>Profile</h3>
            <p><strong>Name: </strong> {profile.name}</p>
            <p><strong>Email: </strong> {profile.email}</p>
            <p><strong>Nickname: </strong> {profile.nickname}</p>
            <p><strong>Created At: </strong> {profile.created_at}</p>
            <p><strong>Updated At: </strong> {profile.updated_at}</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default ProfileDetails