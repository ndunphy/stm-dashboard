import React, { PropTypes as T } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { Link } from 'react-router'

export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }

  loggedIn() {
    return this.props.route.auth.loggedIn()
  }

  login() {
    this.props.route.auth.login()
  }

  logout() {
    this.props.route.auth.logout()
    this.context.router.push('/login')
  }

  land() {
    this.context.router.push('/landing')
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
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/landing">St. Thomas More Classroom Management</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {
                this.loggedIn() ?
                <NavItem onClick={this.logout.bind(this)}>Logout</NavItem>
                :
                <NavItem onClick={this.login.bind(this)}>Login</NavItem>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {children}
      </div>
    )
  }
}

export default Container
