import React, { PropTypes } from 'react'
import { Panel, ListGroup, ListGroupItem, Accordion } from 'react-bootstrap'
import * as Utils from '../../utils/Utils'

export class StudentListItem extends React.Component {
  static propTypes = {
    student: PropTypes.object
  }

  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  }

  render() {
    const student = this.props.student
    const id = this.props.id
    return (
          <Panel header={
            // temp solution until JSON is standardized
            student.hasOwnProperty('name') 
            ? student.name : `${student.firstName} ${student.lastName}`
          } collapsible expanded={this.state.open} onClick={ ()=> this.setState({ open: !this.state.open })}>
            <ListGroup>
              {
                console.log('this panels id is: ' + id)
              }{
                Object.keys(student).map((key, i) => {
                  if(key !== "name" && key !== "firstName" && key !== "lastName" && key !== "weighted_score" && key !== "behavior_score")
                    return <ListGroupItem key={i}>{`${Utils.forHumanAttr(key)}: ${student[key]}`}</ListGroupItem>
                })
              }
            </ListGroup>
          </Panel>
    )
  }
}

export default StudentListItem