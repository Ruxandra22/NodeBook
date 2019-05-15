import React, { Component } from "react";
// import './QuestionComponent.css';

// Bootstrap components
import Card from 'react-bootstrap/Card';


class QuestionComponent extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {};
    }

    getContent(type, min, max) {
        switch (type) {
            case "sociometric":
                return ( <p className="content">choose between {min} and {max} students from the class</p> );
            case "scalar":
                return ( <p className="content">choose a number between {min} and {max}</p> );
            default:
                break;
        }
    }

    render() {

        let content = null;
        content = this.getContent(this.props.type, this.props.min, this.props.max)

        return (
            <div className="QuestionComponent">
                <Card style={{ width: '18rem' }}>
                    <Card.Header>Question {this.props.question_no}</Card.Header>
                    <Card.Body>
                        <Card.Title>{this.props.text}</Card.Title>
                        {this.props.question_no !== "" &&  
                            <div>
                                <Card.Subtitle>Answer option:</Card.Subtitle>
                                {content}
                            </div>
                        }
                    </Card.Body>
                </Card>
            </div>
        );
    };
}

export default QuestionComponent;