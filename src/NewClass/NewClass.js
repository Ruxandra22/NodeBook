import React, { Component } from "react";
import modelInstance from "../data/DataModel";
import './NewClass.css';

import '../index.css';
// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { createClass } from '../data/DataModel';


class NewClass extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClassNameChange = this.handleClassNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

        this.state = {
            show: false,
            newStudent: '',
            className: '',
            description: '',
            studentvalidated: false,
            classvalidated: false,
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleStudentSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            console.log("Submitting new student");
            console.log(this.newStudent);
        }
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ studentvalidated: true });
      }


    handleClassSubmit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            createClass(this.state.className, this.state.description);
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

    render() {
        const { studentvalidated } = this.state;
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
                            <Col sm={3}>
                                <p>Image</p>
                            </Col>
                            <Col sm={6}>
                                <p>Class name</p>
                                <Form.Group controlId="validationClassName">
                                    <Form.Control
                                    required
                                    type="text"
                                    // ref="class_name"
                                    placeholder="Enter class name"
                                    value={this.state.className}
                                    onChange={this.handleClassNameChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col sm={3}>
                                <p>Students</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}>
                                <p>Teachers</p>
                            </Col>
                            <Col sm={6}>
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
                            </Col>
                            <Col sm={3}>
                                <Button size="sm" variant="primary" onClick={this.handleShow}>
                                    Add student
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}></Col>
                            <Col sm={6}></Col>
                            <Col sm={3}>
                                <Button size="sm" variant="secondary" href="/YourClasses">
                                    Cancel
                                </Button>
                                <Button size="sm" variant="primary" type="Submit">Save</Button>
                            </Col>
                        </Row>
                    </Container>
                </Form>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a new student</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form
                        noValidate
                        studentvalidated={studentvalidated}
                        onSubmit={e => this.handleStudentSubmit(e)}
                    >
                        <Form.Group controlId="validationStudentName">
                            <Form.Label>Student name</Form.Label>
                            <Form.Control
                            required
                            type="text"
                            placeholder="Enter student name"
                            />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default NewClass;
