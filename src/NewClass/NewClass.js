import React from "react";
import './NewClass.css';
import QRCode from 'qrcode.react';
import '../index.css';

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import modelInstance from '../data/DataModel';
import {Link} from "react-router-dom";
import CrossComponent from "../components/CrossComponent";


class NewClass extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClassNameChange = this.handleClassNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleTeacherChange = this.handleTeacherChange.bind(this);
        this.checkInput = this.checkInput.bind(this);


        this.state = {
            show: false,
            newStudent: '',
            className: '',
            description: '',
            teacher: '',
            classvalidated: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleClassSubmit(event) {
        this.setState({ show: true });
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            console.log("submit");
            modelInstance.createClass(this.state.className, this.state.description);
        }
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ classvalidated: true });
      }

    handleClassNameChange(event) {
        this.setState({
            className: event.target.value
        });
    }

    handleDescriptionChange(event) {
        this.setState({
            description: event.target.value
        })
    }

    handleTeacherChange(event) {
        this.setState({
            teacher: event.target.value
        })
    }

    checkInput() {
        if (this.state.teacher === '' || this.state.className === '' || this.state.description === '') {
            return true;
        }
        return false;
    }

    render() {
        const { classvalidated } = this.state;

        return (
            <div className="NewClass">
                <Container>
                    <div>
                          <h1> CREATE NEW CLASS </h1>
                    </div>
                </Container>
                <Form
                    noValidate
                    classvalidated={classvalidated}
                    onSubmit={e => this.handleClassSubmit(e)}
                >
                <Container>
                    <Row>
                        <Col sm={4}>
                            <div className="card">
                                <h2>Add an image</h2>
                                <div className="moreButton">
                                    {CrossComponent()}
                                </div>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <p>Class name</p>
                            <Form.Group controlId="validationClassName">
                                <Form.Control
                                required
                                type="text"
                                placeholder="Enter class name"
                                value={this.state.className}
                                onChange={this.handleClassNameChange}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <hr/>
                            <p>Class description</p>
                            <Form.Group controlId="validationClassDescription">
                                <Form.Control
                                    required
                                    type="text"
                                    ref="class_description"
                                    placeholder="Enter class description"
                                    value={this.state.description}
                                    onChange={this.handleDescriptionChange}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <hr/>
                            <p>Teachers</p>
                            <Form.Group controlId="validationClassDescription">
                                <Form.Control
                                    required
                                    type="text"
                                    ref="teachers"
                                    placeholder="Enter the teachers"
                                    value={this.state.teacher}
                                    onChange={this.handleTeacherChange}
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col sm={4}>
                            <button className="btn btn-primary_red" size="sm" href="/YourClasses">
                                Cancel
                            </button>
                            <button
                                className="btn btn-primary_blue" size="sm" type="Submit" disabled={this.checkInput()}>
                                Save
                            </button>
                        </Col>
                    </Row>
                </Container>
                </Form>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>The generated QR Code</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={4}/>
                            <Col sm={4}>
                                {/*For now, the QR id hardcoded*/}
                                <QRCode value="http://facebook.github.io/react/" />
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col sm={8}>
                                <Link to="/yourClasses">
                                    <button className="btn btn-secondary_yellow">
                                        Go to your classes
                                    </button>
                                </Link>
                            </Col>
                            <Col sm={4}>
                                <button className="btn btn-primary_red" onClick={this.handleClose}>
                                    Close
                                </button>
                            </Col>
                        </Row>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default NewClass;
