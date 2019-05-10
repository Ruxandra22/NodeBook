import React, { Component } from "react";
import modelInstance from "../data/DataModel";
import QuestionComponent from "../components/QuestionComponent";
import SaveQuest from "../SaveQuest/SaveQuest";
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

        this.state = {
            questions: [],
            questionComponents: "",
            validated: "",
            validatedQuestionnaire: "",
            showAddQuestion: false,
            showSaveQuestionnaire: false,
            newQuestion: "",
            newQuestionType: "sociometric",
            newQuestionMin: "",
            newQuestionMax: "",
            questionnaireName: "",
            questionnaireType: "sociometric",
            number: 0,
        };
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

    // Handle submissions
    handleQuestionSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            this.state.number += 1;
            this.state.questions.push({
                "text": this.state.newQuestion,
                "question_no": this.state.number,
                "type": this.state.newQuestionType,
                "min": this.state.newQuestionMin,
                "max": this.state.newQuestionMax
            });
            this.resetNewQuestionState();
        }
        console.log(JSON.stringify(this.state.questions));
        this.setQuestionComponents();
        if (form.checkValidity() === false) {
            console.log("Cannot validate");
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validated: true });
      };

      handleQuestionnaireSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            console.log(this.state.questionnaireName);
            console.log(this.state.questionnaireType);
            this.resetNewQuestionnaireState();
        }
        if (form.checkValidity() === false) {
            console.log("Cannot validate");
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ validatedQuestionnaire: true });
      };

      setQuestionComponents() {
        this.state.questionComponents = this.state.questions.map((question) => 
            <QuestionComponent as="{Col}"
            key={question.question_no}
            text={question.text}
            question_no={question.question_no}
            type={question.type}
            min={question.min}
            max={question.max}
            />
        )
      };

    resetNewQuestionState() {
        this.state.validated = "";
        this.state.showAddQuestion = false;
        this.state.newQuestion = "";
        this.state.newQuestionMin = "";
        this.state.newQuestionMax = "";
        this.state.validated = "";
    };

    resetNewQuestionnaireState() {
        this.state.validatedQuestionnaire = "";
        this.state.showSaveQuestionnaire = false;
        this.state.questionnaireName = "";
    }

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
                            <Button variant="primary_blue">Send</Button>
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
                        
                        <Button variant="primary_blue" type="submit">Submit</Button>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="gray" onClick={this.handleCloseAddQuestion}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>


                {/* Add a questionnaire */}
                <Modal show={this.state.showSaveQuestionnaire} onHide={this.handleCloseSaveQuestionnaire}>
                    <Modal.Header closeButton>
                        <Modal.Title>Save Questionnaire</Modal.Title>
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
                                <option value="sociometric">Students in class</option>
                                <option value="atmosphere">Class atmosphere</option>
                                <option value="learning">Learning</option>
                            </Form.Control>
                            <Form.Control.Feedback type="invalid">Missing questionnaire type!</Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary_blue" type="submit">Submit</Button>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="gray" onClick={this.handleCloseSaveQuestionnaire}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    };
}

export default NewQuestionnaire;
