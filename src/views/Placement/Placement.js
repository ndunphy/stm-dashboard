import React, { PropTypes as T } from 'react'
import { PageHeader } from 'react-bootstrap'
import AuthService from '../../utils/AuthService'
import { ordinal } from '../../utils/Utils'
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
      placement: {}
    }

    fetch(`http://localhost:8080/api/placements/${this.props.params.grade}`, {
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
    const { profile } = this.props
    return (
      <div className="root">
        <PageHeader>{ordinal(this.props.params.grade)} Placement</PageHeader>
      </div>
    )
  }
}

export default Placement