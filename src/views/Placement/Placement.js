import React, { PropTypes as T } from 'react'
import { PageHeader, Grid, Row, Col } from 'react-bootstrap'
import AuthService from '../../utils/AuthService'
import { ordinal } from '../../utils/Utils'
import SectionListGroup from '../../components/Section/SectionListGroup'
import './Placement.css'

export class Placement extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService),
    profile: T.object,
  }

  constructor(props) {
    super(props)

    this.state = {
      placement: {
        sections: []
      }
    }

    fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/api/placements/${this.props.params.grade}`, {
      method: 'GET'
    }).then(response => {
      response.json().then(placement => {
        this.setState({
          placement: placement
        })
      })
    })
    
  }

  render() {
    const { grade } = this.props.params
    const { placement } = this.state
    return (
      <div className="root">
        <PageHeader>{ordinal(grade)} Placement</PageHeader>
        <Grid>
          <Row>
            {
              placement.sections.map((section, i) => {
                return <Col key={i} xs={3}><SectionListGroup section={section}></SectionListGroup></Col>
              })
            }
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Placement