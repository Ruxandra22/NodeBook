
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";

import './Questionnaires.css';
import modelInstance from "../data/DataModel";
import {Container } from "mdbreact";

import CrossComponent from "../components/CrossComponent";

//these need to be deleted and replaced with an API call to images
//in DataModel.js
import atmosphere from "../images/atmosphere.png"
import sociometrics from "../images/sociometrics.PNG"
import learning from "../images/learning.PNG"

class Image extends React.Component {
    render() {
        const { image } = this.props;
        let style = {
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
        </div>)
    }
}

class Questionnaires extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 'INITIAL',
            teacherID: 1,
            categories: []
        }
    }

    componentDidMount() {

        modelInstance.getCategories(this.state.teacherID).then(result => {
            this.setState( {
                status: 'SUCCESS',
                categories: result.categories
            });
            console.log("result testing API", this.state.categories);

        }).catch(()=>{
            this.setState( {
                status: 'ERROR'
            });
            console.log("status", this.state.status);
        })
}


    render() {
        let categoryImages = [learning , atmosphere, sociometrics];
       
        let i = 0;
        let categoriesElement = this.state.categories.map((category) =>
                <div id="category"  key={category.name} className="card">
                    <Link to={{pathname: '/Questionnaires-Category=' + category.name}}>
                            <Name title={category.name} />
                            <Image image={categoryImages[i++]}/>
                    </Link>
                </div>
        )

        return (
            <div className="Questionnaires">
                <Container >
                    <div className="titleContainer">
                          <h1> Questionnaires</h1>
                    </div>
                </Container>
                <Container className="classContainer">
                    <Row>
                        {categoriesElement}
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
