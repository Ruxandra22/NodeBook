import React, { Component } from "react";
import SaveButton from '../components/SaveButtonComponent';
import CancelButton from '../components/CancelButtonComponent';
import SendButton from '../components/SendButtonComponent';
import Row from "react-bootstrap/Row";
import "./NewQuestionnaire.css";
import Link from "react-router-dom/es/Link";
import Popup from 'reactjs-popup'
import SaveQuest from "../SaveQuest/SaveQuest";
import Button from "react-bootstrap/Button";
import SendQuest from "../SendQuest/SendQuest";

class NewQuestionnaire extends Component {
    render() {
        let SaveBtn = SaveButton();
        let CancelBtn = CancelButton();
        let SendBtn = SendButton();
        return (
            <div className="NewQuestionnaire container-fluid">
                <div className="row new_questionnaire">
                    <h2 className="col-md-11 questionnaire_title">NEW QUESTIONNAIRE</h2>
                    <Popup
                        trigger={<a><div className="send_button">{SendBtn}</div></a>}
                        modal
                        closeOnDocumentClick>
                            <span>
                                <SendQuest/>
                            </span>
                    </Popup>
                </div>
                <h2 className="questions_panel">Questions here</h2>
                <Row className="SC_buttons">
                    <Link to="/questionnaires">{CancelBtn}</Link>
                    <Popup
                        trigger={<a><div className="save_button">{SaveBtn}</div></a>}
                        modal
                        closeOnDocumentClick>
                            <span>
                                <SaveQuest/>
                            </span>
                    </Popup>
                </Row>
            </div>
        );
    }
}

export default NewQuestionnaire;
