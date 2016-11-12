import React, { PropTypes } from 'react'

export class StudentListItem extends React.Component {
  static propTypes = {
    student: PropTypes.object
  }

  render() {
    const { student } = this.props
    return (
      <div>
        {
          // TODO : remove when JSON is standardized
          student.hasOwnProperty('name') 
          ? student.name : `${student.firstName} ${student.lastName}`
        }
      </div>
    )
  }
}

export default StudentListItem