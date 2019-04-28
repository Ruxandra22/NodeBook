
import React, { Component } from "react";
import Link from "react-router-dom/es/Link";
import Row from "react-bootstrap/Row";

import './Questionnaires.css';
import modelInstance from "../data/DataModel";
import { CardGroup, Container } from "mdbreact";

import CrossComponent from "../components/CrossComponent";

//these need to be deleted and replaced with an API call to images
//in DataModel.js
import atmosphere from "../images/atmosphere.png"
import sociometrics from "../images/sociometrics.PNG"
import learning from "../images/learning.PNG"

class Image extends React.Component {
    render() {
      const { image } = this.props;
      var style = {
        backgroundImage: 'url(' + image + ')',
      };
      return (
               <header style={style} id={image} className="class-image" />
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

class Questionnaires extends Component {


     componentDidMount(){

    }  
   

    render() {
        let categoryImages = [learning , atmosphere,sociometrics];
        let i = 0;
        let categories = modelInstance.getCategories().map((category) =>
               
                <div id="category"  key={category} className="card">
                    <Link to={{pathname: '/Questionnaires-Category='+category}}>
                            <Name title={category} />
                            <Image image={categoryImages[i++]}/>
                    </Link>
                </div>
        )
        return (
            <div className="YourClasses">

                <Container >
                    <div className="titleContainer">
                          <h1> QUESTIONNAIRES</h1>
                    </div>
                </Container>
                <Container className="classContainer">
                    <Row>
                        {categories}
                    
                        <div id="category"  key={"newClass"} className="card">
                            <Link to={{pathname: '/newQuestionnaire'}}>
                                    <Name title={"Create New Questionnaire"} />
                                    <div className="moreButton">
                                            {CrossComponent()}
                                    </div>
                            </Link>
                        </div>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default Questionnaires;
