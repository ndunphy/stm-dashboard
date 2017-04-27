import React, { PropTypes as T } from 'react'
import { ListGroup, ListGroupItem, Grid, Row, Col, Button } from 'react-bootstrap'
import * as Utils from '../../../utils/Utils'
import './StudentViewProfile.css'

export class StudentViewProfile extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    student: T.object,
    toggleEdit: T.func
  }

  render() {
    const { student } = this.props
    console.log(student)
    return (
       <Grid fluid>
          <Row>
            <Col xs={2}>
              <Grid fluid>
                <Row>
                </Row>
              </Grid>
            </Col>
          </Row>
          <Row>

          </Row>
        </Grid>
     )
  }
}

export default StudentViewProfile
