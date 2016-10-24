import React, { PropTypes as T } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import AuthService from '../../utils/AuthService'
import GradePlacePanel from '../../components/Grade/GradePlacePanel'
import './RunPlacements.css'

export class RunPlacements extends React.Component {
  static propTypes = {
    auth: T.instanceOf(AuthService),
    profile: T.object
  }

  render() {
    return (
    <div className="root">
      <Grid>
        <Row>
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map((grade, i) => {
              return (
                <Col lg={2} xs={4} key={i}>
                  <GradePlacePanel grade={grade}/>
                </Col>)
            })
          }
        </Row>
      </Grid>
    </div>
    )
  }
}

export default RunPlacements