import React, { PropTypes as T } from 'react'
import { Jumbotron } from 'react-bootstrap'

export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }

  render() {
    let children = null
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        // Send auth instance to children
        auth: this.props.route.auth
      })
    }

    return (
      <Jumbotron>
        {children}
      </Jumbotron>
    )
  }
}

export default Container
