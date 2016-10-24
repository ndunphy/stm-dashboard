import React, { PropTypes } from 'react'
import { Panel, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
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
    const { student } = this.props
    return (
      <div>
        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
          {
          // temp solution until JSON is standardized
          student.hasOwnProperty('name') 
          ? student.name : `${student.firstName} ${student.lastName}`
          }
        </Button>
        <Panel collapsible expanded={this.state.open}>
          <ListGroup>
            {
              Object.keys(student).map((key, i) => {
                if(key !== "name" && key !== "firstName" && key !== "lastName" && key !== "weighted_score" && key !== "behavior_score")
                  return <ListGroupItem key={i}>{`${Utils.forHumanAttr(key)}: ${student[key]}`}</ListGroupItem>
                else
                  return
              })
            }
          </ListGroup>
        </Panel>
      </div>
    )
  }
}

export default StudentListItem