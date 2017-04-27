import React, { PropTypes as T } from 'react'
import { PageHeader, Grid, Row, Col, Panel } from 'react-bootstrap'
import { StudentViewProfile } from '../../components/Student/StudentViewProfile/StudentViewProfile'
import { StudentEditForm } from '../../components/Student/StudentEditForm/StudentEditForm'
import './StudentProfile.css'

export class StudentProfile extends React.Component {
  static contextTypes = {
    router: T.object,
    addNotification: T.func
  }

  static propTypes = {
    profile: T.object
  }

  constructor(props) {
    super(props)

    this.state = {
      student: {},
      editing: false,
      allowSave: true
    }

//changed after api to StudentProfile
    fetch(`${process.env.REACT_APP_SERVER_ADDRESS}/api/students/${this.props.params.studentID}`, {
      method: 'GET'
    }).then(response => {
      response.json().then(student => {
        this.setState({
          student: student
        })
        if (response.ok) {
          this.setState({
            student: student
          })
        } else {
          this.context.addNotification({
            title: 'Error',
            message: 'Failed to fetch student',
            level: 'error'
          })
        }
      }).catch(err => {
        console.error(err)
        this.context.addNotification({
          title: 'Error',
          message: 'Failed to fetch student',
          level: 'error'
        })
      })
    })
  }

  toggleEdit() {
    this.setState({ editing: !this.state.editing })
  }

  updateStudent(student) {
    this.setState({
      student: student
    })
  }

  render() {
    const { student } = this.state
    return (
      <div className="root">
        <PageHeader>{`${student.firstName} ${student.lastName}`}</PageHeader>
        <Grid>
          <Row>
            <Col xs={12}>
              <Panel>
                {
                  this.state.editing ?
                    <StudentEditForm student={student} toggleEdit={this.toggleEdit.bind(this)} updateStudent={this.updateStudent.bind(this)} />
                    : <StudentViewProfile student={student} toggleEdit={this.toggleEdit.bind(this)} />
                }
              </Panel>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
//????? it was just Student
export default StudentProfile
