import React, { Component } from "react";
import SaveButton from '../components/SaveButtonComponent';
import CancelButton from '../components/CancelButtonComponent';
import Row from "react-bootstrap/Row";
import "./NewQuestionnaire.css";
import Link from "react-router-dom/es/Link";
import Popup from 'reactjs-popup'
import SaveQuest from "../SaveQuest/SaveQuest";

class NewQuestionnaire extends Component {
    render() {
        let SaveBtn = SaveButton();
        let CancelBtn = CancelButton();
        return (
            <div className="NewQuestionnaire">
                <h1 className="questionnaire_title">This is where you create a new questionnaire!</h1>
                <h2 className="questions_panel">Questions here</h2>
                <Row className="SC_buttons">
                    <Link to="/questionnairesOverview">{CancelBtn}</Link>
                    {/*<Link to="/saveQuestionnaire">*/}
                    {/*    <div className="save_button">{SaveBtn}</div>*/}
                    {/*</Link>*/}
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
