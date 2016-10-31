import React, { PropTypes } from 'react'
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap'
import StudentListItem from '../Student/StudentListItem'
import * as Utils from '../../utils/Utils'

export class Section extends React.Component {
  static propTypes = {
    section: PropTypes.object
  }

  render() {
    const { section } = this.props
    const { stats } = section
    return (
      <div>
        <h5>Teacher: {section.teacher.name}</h5>
        <Panel header="Statistics">
          <ListGroup fill>
            <ListGroupItem>
              Size: {section.students.length}
            </ListGroupItem>
            {
              Object.keys(stats).filter(key => key in Utils.translations).map((key, i) => {
                let val = (isNaN(stats[key])) ? stats[key] : Utils.round(stats[key], 2)
                val = (key === 'avgAge') ? `${Utils.round(val / 12, 0)} y. ${Utils.round(val % 12, 0)} mo.` : val
                return <ListGroupItem key={i}>{`${Utils.translations[key]}: ${val}`}</ListGroupItem>
              })
            }
          </ListGroup>
        </Panel>
        <Panel header="Students">
          <ListGroup fill>
            {
              section.students.map((student, i) => {
                return (
                  <ListGroupItem key={i}>
                    <StudentListItem student={student} />
                  </ListGroupItem>
                )
              })
            }
          </ListGroup>
        </Panel>
      </div>
    )
  }
}

export default Section