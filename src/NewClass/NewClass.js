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


class NewClass extends React.Component {
    constructor(props, context) {
        super(props, context);
  
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
  
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
        const form = event.currentTarget;
        if (form.checkValidity() === true) {
            console.log("Submitting new class");
            console.log(this.className, this.description);
            modelInstance.setClassName(this.className);
        }
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({ classvalidated: true });
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
                                    placeholder="Enter class name"
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
                                    placeholder="Enter class description"
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            <Col sm={3}>
                                <Button size="sm" variant="primary_blue" onClick={this.handleShow}>
                                    Add student
                                </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={3}></Col>
                            <Col sm={6}></Col>
                            <Col sm={3}>
                                <Button size="sm" variant="gray" href="/YourClasses">
                                    Cancel
                                </Button>
                                <Button variant="primary_blue" size="sm" type="Submit">Save</Button>
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
                        <Button variant="primary_blue" type="submit">Submit</Button>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="gray" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default NewClass;
