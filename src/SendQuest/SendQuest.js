import React, { Component } from "react";
import CancelButton from "../components/CancelButtonComponent";
import "./SendQuest.css"
import SendButton from '../components/SendButtonComponent';

class SendQuest extends Component {
	render() {

		let CancelBtn = CancelButton();
		let SendBtn = SendButton();
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
								<option>10A</option>
								<option>10B</option>
								<option>10C</option>
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
