import React, { Component } from "react";
import CancelButton from "../components/CancelButtonComponent";
import "./SendQuest.css"
import SendButton from '../components/SendButtonComponent';
import modelInstance from "../data/DataModel";

class SendQuest extends Component {

	constructor(props) {
		super(props);
		this.state = {
			status: 'INITIAL',
		}
	}

	componentDidMount(){
		// for now, the classID is hardcoded
		console.log("test");
		modelInstance.getStudents("1").then(result => {
			this.setState({
				status: 'LOADED',
				students: result.students,
			})
			// console.log(this.state.students);
			}).catch(() => {
			this.setState({
				status: 'ERROR'
			})
		});

		// for now, the teacher's ID is hardcoded
		modelInstance.getClassNames("1").then(result => {
			this.setState({
				classes: result.classes
			})
			}).catch(() => {
			this.setState({
				status: 'ERROR'
			})
		});
	}

	render() {
		let CancelBtn = CancelButton();
		let SendBtn = SendButton();

		let dropdownList;
		if (this.state.classes != null) {
			dropdownList = this.state.classes.map((classResult) =>
				<option key={classResult.id}>{classResult.name}</option>
			)
		}
		return (
			<div className="SendQuest">
				<div className="modal-header">
				</div>
				<div className="modal-body">
					<h6 className="quest_name">QUESTIONNAIRE NAME</h6>
					<form>
						<label>
							Name:
							<input type="text" className="name_field"/>
						</label>
					</form>
					<h6 className="quest_name">SELECT CLASSES YOU WANT TO SEND TO</h6>
					<form>
						<label>
							Classes:
							<select className="dropdown_classes" name="quest_category">
								{dropdownList}
							</select>
						</label>
					</form>
					<input
						type="text"
						className="text_box"
						// value={this.state.value}
						// onChange={this.handleChange}
					/>
					<div className="row">
						<div className="col-7"></div>
						<a><div>{CancelBtn}</div></a>
						<a><div className="send_button_form">{SendBtn}</div></a>
					</div>
				</div>
			</div>
		);
	}
}

export default SendQuest;
