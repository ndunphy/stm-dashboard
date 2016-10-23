import React, { PropTypes } from 'react'
import { ListGroup , ListGroupItem} from 'react-bootstrap'
import StudentListItem from '../Student/StudentListItem'

export class Section extends React.Component {
  static propTypes = {
    section: PropTypes.object
  }

  render() {
    const { section } = this.props
    return (
      <div>
        Teacher: { section.teacher }
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