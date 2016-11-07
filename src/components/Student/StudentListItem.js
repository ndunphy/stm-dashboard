import React, { PropTypes } from 'react'
import { Panel, ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import * as Utils from '../../utils/Utils'

export class StudentListItem extends React.Component {
  static propTypes = {
    student: PropTypes.object
  }

  constructor(...args) {
    super(...args)
    this.state = {
      open: false,
      button: false
    }
  }

  panelClick(event) {
    console.log('button: ' + this.state.button)
    if (!this.state.button)
      this.setState({ open: !this.state.open })
    this.setState({ button: false })
  }

  buttonClick() {
    alert('this is not implemented yet')
    this.setState({ button: true })
  }

  render() {
    const student = this.props.student
    return (
      <Panel header={
        // temp solution until JSON is standardized
        student.hasOwnProperty('name')
          ? student.name : `${student.firstName} ${student.lastName}`
      } collapsible expanded={this.state.open} onClick={() => this.setState({ open: !this.state.open })}>
        <ListGroup>
          {
            Object.keys(student).filter(key => Utils.studentDisplayKey(key)).map((key, i) => {
              return <ListGroupItem key={i}>{`${Utils.forHumanAttr(key, student[key])}`}</ListGroupItem>
            })
          }
        </ListGroup>
        <Button bsSize="small" onClick={() => alert('this is not implemented yet')}>Go to Student Card</Button>
      </Panel>
    )
  }
}

export default StudentListItem