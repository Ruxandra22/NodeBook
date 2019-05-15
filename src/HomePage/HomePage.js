import React, { Component } from "react";
import Link from "react-router-dom/es/Link";
import Row from "react-bootstrap/Row";

import "./HomePage.css";
import modelInstance from "../data/DataModel";
import {Container } from "mdbreact";
import Grid from '@material-ui/core/Grid';
import CrossComponent from "../components/CrossComponent";

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
    )
    }
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
        let shortCuts = ["Saved Questionnaires", "Create New Questionnaire", "My Classes","Create new class"];
        let routingPath = ["Questionnaires","newQuestionnaire","yourClasses","newClass"];
        let i = 0;
        let j = 0;
 
        let shortCutsElement = shortCuts.map((shortCut) =>
                <div id="shortCut"  key={shortCut} className="card">
                    <Link to={{pathname: '/' + routingPath[i++]}}>
                            <Name title={shortCut} />
                            <Image image={shortCutImages[j++]}/>
                    </Link>
                </div>
        )
       

        return (
            <div className="Questionnaires">

                <Container >
                    <div className="titleContainer">
                          <h1> HOME </h1>
                    </div>
                    </Container>
                <Container >
                <div className="shortCutBox">
                    <Row>
                            {shortCutsElement}
                    </Row>
                </div>
                </Container>
            </div>
        );
    }
}
export default HomePage;
