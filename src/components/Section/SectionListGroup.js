import React, { PropTypes } from 'react'
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap'
import StudentListItem from '../Student/StudentListItem'
import * as Utils from '../../utils/Utils'

export class Section extends React.Component {
  static propTypes = {
    section: PropTypes.object
  }

  render() {
    const section = this.props.section
    const { stats } = section
    const id = this.props.id
    return (
      <div>
        <h5>Teacher: {section.teacher}</h5>
        <Panel header="Statistics">
          <ListGroup fill>
            <ListGroupItem>
              Size: {section.students.length}
            </ListGroupItem>
            {
              Object.keys(stats).map((key, i) => {
                let val = (isNaN(stats[key])) ? stats[key] : Utils.round(stats[key], 2)
                return <ListGroupItem>{`${Utils.forHumanStats(key)}: ${val}`}</ListGroupItem>
              })
            }
          </ListGroup>
        </Panel>
        <Panel header="Students">
          {
            section.students.map((student, i) => {
              return (
                  <StudentListItem student={student} id={id + i} />
              )
            })
          }
        </Panel>
      </div>
    )
  }
}

export default Section