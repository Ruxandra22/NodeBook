import React, { Component } from "react";
import "./SaveQuest.css"
import SaveButton from "../components/SaveButtonComponent";
import CancelButton from "../components/CancelButtonComponent";
import Row from "react-bootstrap/Row";

class SaveQuest extends Component {
	render() {

		let SaveBtn = SaveButton();
		let CancelBtn = CancelButton();
		return (
			<div className="SaveQuest">
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
					<h6 className="quest_name">SAVE UNDER CATEGORY</h6>
					<form>
						<label>
							Category:
							<select className="dropdown" name="quest_category">
								<option value="Sociometrics">Sociometrics</option>
								<option value="ClassAtmosphere">Class Atmosphere</option>
								<option value="Learning">Learning</option>
							</select>
						</label>
					</form>
					<p className="quest_name">OR</p>
					<form>
						<label>
							New Category:
							<input type="text" className="new_category"/>
						</label>
					</form>
					<div className="row">
						<div className="col-7"></div>
						<a><div>{CancelBtn}</div></a>
						<a><div className="save_button">{SaveBtn}</div></a>
					</div>
				</div>
			</div>
		);
	}
}

export default SaveQuest;
