import React, { PropTypes as T } from 'react'
import { PageHeader } from 'react-bootstrap'
import AuthService from '../../utils/AuthService'
import { ordinal } from '../../utils/Utils'
import './Placement.css'

// placement will be passed this in the future
const GRADE = 3

export class Placement extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService),
    profile: T.object
  }

  render() {
    const { profile } = this.props
    return (
      <div className="root">
        <PageHeader>{ordinal(GRADE)} Placement</PageHeader>

      </div>
    )
  }
}

export default Placement