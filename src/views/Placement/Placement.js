import React, { PropTypes as T } from 'react'
import { PageHeader } from 'react-bootstrap'
import AuthService from '../../utils/AuthService'
import { ordinal } from '../../utils/Utils'
import 'react-router'
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
      sections: []
    }

    this.grade = props.params.grade
    console.log(this.grade)
    this.grade = parseInt(this.grade)

    fetch(`http://localhost:8080/api/placement/${this.grade}`)
      .then(grade => {
        this.setState({
          sections: grade.sections
        })
      })
  }

  render() {
    const { profile } = this.props
    return (
      <div className="root">
        <PageHeader>{ordinal(this.grade)} Placement</PageHeader>

      </div>
    )
  }
}

export default Placement