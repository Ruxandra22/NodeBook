import React, { Component } from "react";
import Link from "react-router-dom/es/Link";
import "./HomePage.css";

import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'
import { Container } from "mdbreact";

//these need to be deleted and replaced with an API call to images
//in DataModel.js
import questionnaires from "../images/questionnaires.png"
import newQuestionnaire from "../images/new-questionnaire.png"
import myClasses from "../images/my-classes.png"
import newClass from "../images/new-class.png"

// const styles = StyleSheet.create({
//     stretch: {
//       width: 50,
//       height: 200
//     }
//   });

class Image extends React.Component {
    render() {
        const { image } = this.props;
        let style = {
            backgroundImage: 'url(' + image + ')',
            stretch: {
                width: 10,
                height: 10
            }
        };
        return (
            <header style={style} id={image} className="class-image2" />
        )
    }
}

class Name extends React.Component {
    render() {

    return (
        <div className="class-name">
            <h2>{this.props.title}</h2>
        </div>
    )}
}

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 'INITIAL',
            teacherID: 1,
        }
    }

    componentDidMount(){
}

    render() {
        let shortCutImages = [questionnaires, newQuestionnaire, myClasses, newClass];
        let shortCuts = ["Questionnaires", "New Questionnaire", "My Classes","Create New Class"];
        let routingPath = ["Questionnaires","newQuestionnaire","yourClasses","newClass"];
        let i = 0;
        let j = 0;
 
        let shortCutsElement = shortCuts.map((shortCut) =>
        <Col sm="3">
            <div id="shortCut"  key={shortCut} className="card">
                <Link to={{pathname: '/' + routingPath[i++]}}>
                    <Name title={shortCut} />
                    <Image image={shortCutImages[j++]}/>
                </Link>
            </div>
        </Col>
        )

        return (
            <div className="Questionnaires">
                <Container>
                    <div className="titleContainer">
                        <h1> HOME </h1>
                    </div>
                </Container>
                {/* <Container > */}
                <div className="shortCutBox">
                    <Row>
                        {shortCutsElement}
                    </Row>
                </div>
                {/* </Container> */}
            </div>
        );
    }
}


export default HomePage;
