import React, { PropTypes as T } from 'react'
import AuthService from '../../utils/AuthService'
import './RunPlacements.css'
import {Button,Table} from 'react-bootstrap'

export class RunPlacements extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService),
    profile: T.object
  }

  runAlgorithm(grade) {
    fetch(process.env.REACT_APP_SERVER_ADDRESS + '/api/placements/' + grade, 
    {
      method: 'PUT',
    }).then((response) => {
      window.location = '#/placement/' + grade
    })
  }

  viewAlgorithm(grade) {
    window.location = '#/placement/' + grade
  }


  getRunButton(gradeID){
    return (<Button onClick={ () => this.runAlgorithm(gradeID)}>Run</Button>)
  }
  getViewButton(gradeID){
    return (<Button onClick={ () => this.viewAlgorithm(gradeID)}>View</Button>)
  }

  getTableRow(gradeID, gradeTitle) {
    return (<tr>
            <td>{gradeTitle}</td>
            <td>{this.getRunButton(gradeID)}</td>
            <td>{this.getViewButton(gradeID)}</td>
          </tr>)
  }

  render() {
    const { profile } = this.props
    return (
    <div className="root">
      <Table striped bordered condensed hover>
        <tbody>
          {this.getTableRow(0, "Kindergarten")}
          {this.getTableRow(1, "Grade 1")}
          {this.getTableRow(2, "Grade 2")}
          {this.getTableRow(3, "Grade 3")}
          {this.getTableRow(4, "Grade 4")}
          {this.getTableRow(5, "Grade 5")}
          {this.getTableRow(6, "Grade 6")}
          {this.getTableRow(7, "Grade 7")}
          {this.getTableRow(8, "Grade 8")}
        </tbody>
      </Table>
    </div>
    )
  }
}

export default RunPlacements

/*<ButtonToolbar bsSize="large" >
          <Button href="/placement" bsStyle="primary">Kindergarten</Button>
          <Button bsStyle="primary">Grade 1</Button>
          <Button bsStyle="primary">Grade 2</Button>
        </ButtonToolbar>
        <br/>
        <ButtonToolbar bsSize="large" >
          <Button bsStyle="primary">Grade 3</Button>
          <Button bsStyle="primary">Grade 4</Button>
          <Button bsStyle="primary">Grade 5</Button>
        </ButtonToolbar>
        <br/>
        <ButtonToolbar bsSize="large" >
          <Button bsStyle="primary">Grade 6</Button>
          <Button bsStyle="primary">Grade 7</Button>
          <Button bsStyle="primary">Grade 8</Button>
        </ButtonToolbar>*/