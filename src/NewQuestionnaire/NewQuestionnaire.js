import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import modelInstance from "../data/DataModel";
import QuestionComponent from "../components/QuestionComponent";
import './NewQuestionnaire.css';

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


class NewQuestionnaire extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShowAddQuestion = this.handleShowAddQuestion.bind(this);
        this.handleCloseAddQuestion = this.handleCloseAddQuestion.bind(this);
        this.handleShowSaveQuestionnaire = this.handleShowSaveQuestionnaire.bind(this);
        this.handleCloseSaveQuestionnaire = this.handleCloseSaveQuestionnaire.bind(this);
        this.handleShowSendQuestionnaire = this.handleShowSendQuestionnaire.bind(this);
        this.handleCloseSendQuestionnaire = this.handleCloseSendQuestionnaire.bind(this);

        this.handleNewQuestionChange = this.handleNewQuestionChange.bind(this);
        this.handleNewQuestionTypeChange = this.handleNewQuestionTypeChange.bind(this);
        this.handleNewQuestionMinChange = this.handleNewQuestionMinChange.bind(this);
        this.handleNewQuestionMaxChange = this.handleNewQuestionMaxChange.bind(this);
        this.handleQuestionnaireNameChange = this.handleQuestionnaireNameChange.bind(this);
        this.handleQuestionnaireTypeChange = this.handleQuestionnaireTypeChange.bind(this);
        this.handleSendClassChange = this.handleSendClassChange.bind(this);

        this.routeChange = this.routeChange.bind(this);


        this.state = {
            status: "",
            teacherId: 1,
            classes: "",
            categories: [],
            questions: [],
            questionForQuestionnaire: {
                questions: [],
                mins: [],
                maxs: [],
                type: []
            },
            questionComponents: "",
            validated: "",
            validatedQuestionnaire: "",
            showAddQuestion: false,
            showSaveQuestionnaire: false,
            showSendQuestionnaire: false,
            newQuestion: "",
            newQuestionType: "sociometric",
            newQuestionMin: "",
            newQuestionMax: "",
            questionnaireName: "",
            questionnaireType: "",
            sendClass: "",
            number: 0,
        };
    }
     
    //route back to home after questionnaire has been sent
    routeChange() {
        let path = `/`;
        this.props.history.push(path);
      }

    // Handle opening and closing of modals
    handleCloseAddQuestion() {
        this.setState({ showAddQuestion: false });
    };

    handleShowAddQuestion() {
        this.setState({ showAddQuestion: true });
    };

    handleCloseSaveQuestionnaire() {
        this.setState({ showSaveQuestionnaire: false });
    };
  
    handleShowSaveQuestionnaire() {
        this.setState({ showSaveQuestionnaire: true });
    };

    handleShowSendQuestionnaire() {
        this.setState({ showSendQuestionnaire: true, showSaveQuestionnaire: true });
        this.setRedirect;
    };

    handleCloseSendQuestionnaire() {
        this.setState({ showSendQuestionnaire: false, showSaveQuestionnaire: false });
    }

    // Handle form updates
    handleNewQuestionChange = (event) => {
        this.setState({newQuestion: event.target.value});
    };

    handleNewQuestionTypeChange = (event) => {
        this.setState({newQuestionType: event.target.value});
    };

    handleNewQuestionMinChange = (event) => {
        this.setState({newQuestionMin: event.target.value});
    };

    handleNewQuestionMaxChange = (event) => {
        this.setState({newQuestionMax: event.target.value});
    };

    handleQuestionnaireNameChange = (event) => {
        this.setState({questionnaireName: event.target.value});
    };

    handleQuestionnaireTypeChange = (event) => {
        this.setState({questionnaireType: event.target.value});
    };

    handleSendClassChange = (event) => {
        this.setState({sendClass: event.target.value});
    };

    // Handle submissions
    handleQuestionSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            this.setState({number: this.state.number + 1});
            this.state.questions.push({
                "text": this.state.newQuestion,
                "question_no": this.state.number,
                "type": this.state.newQuestionType,
                "min": this.state.newQuestionMin,
                "max": this.state.newQuestionMax
            });
            // New format for questionnaire:
            this.state.questionForQuestionnaire.questions.push(this.state.newQuestion);
            this.state.questionForQuestionnaire.mins.push(this.state.newQuestionMin);
            this.state.questionForQuestionnaire.maxs.push(this.state.newQuestionMax);
            this.state.questionForQuestionnaire.type.push(this.state.newQuestionType);
            this.resetNewQuestionState();
        }
        this.setQuestionComponents();
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });
      };

    handleQuestionnaireSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            let content = JSON.stringify(this.state.questionForQuestionnaire);
            if (this.state.showSendQuestionnaire) {
                modelInstance.postQuestionnaire(this.state.sendClass, content);
            } else {
                modelInstance.postTemplate(this.state.questionnaireType, content);
            }
            this.resetNewQuestionnaireState();
        }
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validatedQuestionnaire: true });
    };

    setQuestionComponents() {
        this.setState({
            questionComponents: this.state.questions.map((question) => 
                <QuestionComponent as="{Col}"
                key={question.question_no}
                text={question.text}
                question_no={question.question_no}
                type={question.type}
                min={question.min}
                max={question.max}/>)
        });
    };

    getClassSelectOption() {
        if (this.state.showSendQuestionnaire) {
            return (
            <Form.Group controlId="validationSelectClass">
                <Form.Label>Select a class to send the questionnaire to</Form.Label>
                <Form.Control
                required
                as="select"
                value={this.state.sendClass}
                onChange={this.handleSendClassChange}>
                    {Object.values(this.state.classes).map(key =>
                        <option key={key.id} value={key.id}>
                            {key.name}
                        </option>
                    )}
                </Form.Control>
                <Form.Control.Feedback type="invalid">Missing questionnaire type!</Form.Control.Feedback>
            </Form.Group>
            );
        }
    }

    resetNewQuestionState() {
        this.setState({
            validated: "",
            showAddQuestion: false,
            newQuestion: "",
            newQuestionMin: "",
            newQuestionMax: ""
        });
    };

    resetNewQuestionnaireState() {
        this.setState({
            validatedQuestionnaire: "",
            showSaveQuestionnaire: false,
            showSendQuestionnaire: false,
            questionnaireName: "",
            sendClass: this.state.classes[0].id
        });
    };

    componentDidMount() {
        modelInstance.getClassNames(this.state.teacherId).then(result => {
            this.setState({
                classes: result.classes,
                sendClass: result.classes[0].id
            });
        }).catch(()=>{
            console.log("Could not retrieve classes for teacher");
        });
        modelInstance.getCategories(this.state.teacherId).then(result => {
            this.setState({
                categories: result.categories,
                questionnaireType: result.categories[0].id
            });
        }).catch(()=>{
            console.log("Could not retrieve categories for questionnaires");
        });
    };


    render() {
        return (
            <div className="NewQuestionnaire">
                {/* Show questions */}
                <Container>
                    <div>
                        <h1> CREATE NEW QUESTIONNAIRE </h1>
                    </div>
                </Container>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <Button
                            variant="primary_blue"
                            onClick={this.handleShowSendQuestionnaire}
                            disabled={this.state.number === 0}>Send</Button>
                        </Col>
                    </Row>
                    <Row>
                        {this.state.questionComponents}
                        {this.state.questions.length < 5 && 
                            <div onClick={this.handleShowAddQuestion}>
                            <QuestionComponent
                                text="Add a new question"
                                question_no={""}
                            />
                            </div>
                        }
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col>
                            <Button variant="gray" href="/Questionnaires">
                                Cancel
                            </Button>
                            <Button 
                            variant="primary_blue" 
                            onClick={this.handleShowSaveQuestionnaire}
                            disabled={this.state.number === 0}>Save</Button>
                        </Col>
                    </Row>
                </Container>

                {/* Add a question */}
                <Modal show={this.state.showAddQuestion} onHide={this.handleCloseAddQuestion}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a new question</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form
                        noValidate
                        validated={this.state.validated}
                        onSubmit={e => this.handleQuestionSubmit(e)}
                    >
                        <Form.Group controlId="validationQuestion">
                            <Form.Label>What is your question?</Form.Label>
                            <Form.Control
                            required
                            type="text"
                            value={this.state.newQuestion}
                            onChange={this.handleNewQuestionChange}
                            placeholder="Enter question"
                            />
                            <Form.Control.Feedback type="invalid">Missing question!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationSelectType">
                            <Form.Label>Select question type</Form.Label>
                            <Form.Control 
                            required
                            as="select" 
                            value={this.state.newQuestionType}
                            onChange={this.handleNewQuestionTypeChange}>
                                <option value="sociometric">Students in class</option>
                                <option value="scalar">Number range</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">Missing question type!</Form.Control.Feedback>
                        </Form.Group>

                        <InputGroup className="mb-3">
                            <FormControl
                            required
                            value={this.state.newQuestionMin}
                            onChange={this.handleNewQuestionMinChange}
                            placeholder="Enter a minimum value"
                            type="number"
                            step="1"
                            />
                            <FormControl
                            required
                            value={this.state.newQuestionMax}
                            onChange={this.handleNewQuestionMaxChange}
                            placeholder="Enter a maximum value"
                            type="number"
                            step="1"
                            />
                            <Form.Control.Feedback type="invalid">Missing minimum and maximum values!</Form.Control.Feedback>
                        </InputGroup>
                        
                        <Button variant="primary_blue" type="submit" >Ok</Button>
                        <Button variant="gray" onClick={this.handleCloseAddQuestion}>Close</Button>
                    </Form>
                    </Modal.Body>
                </Modal>


                {/* Add a questionnaire or add and send a questionnaire */}
                <Modal show={this.state.showSaveQuestionnaire} onHide={this.handleCloseSaveQuestionnaire}>
                    <Modal.Header closeButton>
                        {this.state.showSendQuestionnaire && 
                            <Modal.Title>Send Questionnaire</Modal.Title>
                        }
                        {!this.state.showSendQuestionnaire &&
                            <Modal.Title>Save Questionnaire</Modal.Title>
                        }
                    </Modal.Header>
                    <Modal.Body>
                    <Form
                        noValidate
                        validatedQuestionnaire={this.state.validatedQuestionnaire}
                        onSubmit={e => this.handleQuestionnaireSubmit(e)}
                    >
                        <Form.Group controlId="validationQuestionnaireName">
                            <Form.Label>What is the name of the questionnaire?</Form.Label>
                            <Form.Control
                            required
                            type="text"
                            value={this.state.questionnaireName}
                            onChange={this.handleQuestionnaireNameChange}
                            placeholder="Enter the name of the questionnaire"
                            />
                            <Form.Control.Feedback type="invalid">Missing the name of the questionnaire!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="validationSelectQuestionnaireType">
                            <Form.Label>Select questionnaire type</Form.Label>
                            <Form.Control 
                            required
                            as="select" 
                            value={this.state.questionnaireType}
                            onChange={this.handleQuestionnaireTypeChange}>
                                {this.state.categories.map((categoryOption) => (
                                    <option key={categoryOption.id} value={categoryOption.id}>{categoryOption.name}</option>
                                ))}
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">Missing questionnaire type!</Form.Control.Feedback>
                        </Form.Group>
                        {this.getClassSelectOption()}

                        <Button variant="primary_blue" type="submit" onClick={this.routeChange}>Ok</Button>
                        <Button variant="gray" onClick={this.handleCloseSaveQuestionnaire}>Close</Button>
                    </Form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    };
}

export default NewQuestionnaire;
