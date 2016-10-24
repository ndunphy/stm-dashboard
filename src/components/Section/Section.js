import React, { PropTypes } from 'react'
import { ListGroup } from 'react-bootstrap'

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
          
        </ListGroup>
      </div>
    )
  }
}

export default Section