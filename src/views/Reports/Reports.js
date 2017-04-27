import React, { PropTypes as T } from 'react'
import { Grid, Row, Col, Breadcrumb } from 'react-bootstrap'
import { Panel } from 'react-bootstrap'
import './Reports.css'

export class Reports extends React.Component {

	static contextTypes = {
		router: T.object
	}

	render() {
		return (
			<div className="root">
				<Breadcrumb>
          <Breadcrumb.Item href="#/landing">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Reports
          </Breadcrumb.Item>
        </Breadcrumb>
				<Grid>
					<Row>
						<Col xs={6}>
							<Panel
								//onClick={() => {this.context.router.push('/reports/filter-teacher')}}
								className="clickable-panel">
								<h3>Reports by Grade</h3>
							</Panel>
						</Col>
						<Col xs={6}>
							<Panel
								//onClick={() => {this.context.router.push('/reports/filter-grade')}}
								className="clickable-panel">
								<h3>Reports by Teacher</h3>
							</Panel>
						</Col>
						<Col xs={6}>
							<Panel
								//onClick={() => {this.context.router.push('/reports/filter-students')}}
								className="clickable-panel">
								<h3>Reports by Student</h3>
							</Panel>
						</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}

export default Reports
