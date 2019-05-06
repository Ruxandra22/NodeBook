import React, { Component } from "react";
import SaveButton from '../components/SaveButtonComponent';
import CancelButton from '../components/CancelButtonComponent';
import SendButton from '../components/SendButtonComponent';
import Row from "react-bootstrap/Row";
import "./NewQuestionnaire.css";
import Link from "react-router-dom/es/Link";
import Popup from 'reactjs-popup'
import SaveQuest from "../SaveQuest/SaveQuest";
import SendQuest from "../SendQuest/SendQuest";
import modelInstance from '../data/DataModel';

class NewQuestionnaire extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 'INITIAL',
        }
    }

    componentDidMount(){
        modelInstance.getStudents("1").then(students => {
            console.log(students);
            this.setState({
                status: 'LOADED',
                // cards: cards.photos,
                // theme: this.props.match.params.id
            })
        }).catch(() => {
            this.setState({
                status: 'ERROR'
            })
        })
    }
    render() {
        let SaveBtn = SaveButton();
        let CancelBtn = CancelButton();
        let SendBtn = SendButton();
        return (
            <div className="NewQuestionnaire">
                <section>
                    <h2 className="text-center h1-responsive my-5">
                        New Questionnaire
                    </h2>
                    <Popup
                        trigger={<a><div className="text-right send_button">{SendBtn}</div></a>}
                        modal
                        closeOnDocumentClick>
                            <span>
                                <SendQuest/>
                            </span>
                    </Popup>
                    <h2 className="text-center h1-responsive my-5">Questions here</h2>
                    <Row className="SC_buttons">
                        {/*<Col className="sm-2">*/}
                            <Link to="/questionnaires">{CancelBtn}</Link>
                        {/*</Col>*/}
                        {/*<Col>*/}
                            <Popup
                                trigger={<a><div className="text-right save_button">{SaveBtn}</div></a>}
                                modal
                                closeOnDocumentClick>
                                    <span>
                                        <SaveQuest/>
                                    </span>
                            </Popup>
                        {/*</Col>*/}
                    </Row>
                </section>
            </div>
        );
    }
}

export default NewQuestionnaire;
