import React, { PropTypes } from 'react'
import { ListGroup , ListGroupItem} from 'react-bootstrap'
import StudentListItem from '../Student/StudentListItem'
import { round } from '../../utils/Utils'

export class Section extends React.Component {
  static propTypes = {
    section: PropTypes.object
  }

  render() {
    const { section } = this.props
    const { stats } = section
    return (
      <div>
        Teacher: { section.teacher }     
        <br/>
        Average Behavior: {round(stats.avgBehavior, 2)}
        <ListGroup>
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
      </div>
    )
  }
}

export default Section