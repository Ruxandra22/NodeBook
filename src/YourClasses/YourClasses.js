import React, { Component } from "react";
import './YourClasses.css';
import Link from "react-router-dom/es/Link";
import Row from "react-bootstrap/Row";


import Icon from '@material-ui/core/Icon';

//import SaveButtonComponent from "./components/SaveButtonComponent";

// import SaveButton from '../components/SaveButtonComponent';
// import CancelButton from '../components/CancelButtonComponent';
import CrossComponent from "../components/CrossComponent";

import modelInstance from "../data/DataModel";
import { CardGroup, Container } from "mdbreact";


//these need to be deleted and replaced with an API call to class images
//in DataModel.js
import classImage10A from "../images/10A.jpg"
import classImage9B from "../images/9B.jpg"
import classImage8A from "../images/8A.jpg"
import classImage7C from "../images/7C.jpg"
import classImage10B from "../images/10B.jpg"




class ClassImage extends React.Component {
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

class ClassName extends React.Component {
    render() {

        return (
            <div className="class-name">
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

class YourClasses extends Component {



    componentDidMount(){

        let allClassesTeacherHas;
            modelInstance.getClassNamesTest(1).then(result => {
              
                this.setState( {
                    status: 'SUCCESS'
                })
                allClassesTeacherHas = result;
                console.log("result testing API", result)
             
            }).catch(()=>{
                this.setState( {
                    status: 'ERROR'
                })
                console.log("status", this.state.status);
            })
    }


    render() {
        // let SaveBtn = SaveButton();
        // let CancelBtn = CancelButton();
        let classImages = [classImage10A , classImage9B,classImage8A ,classImage7C, classImage10B ];

        let i = 0;
        let studentClassNames = modelInstance.getClassNames().map((studentClass) =>
            <div id="studentClass"  key={studentClass} className="card">
                <Link to={{pathname: '/ClassOverview/'+ studentClass}}>
                    <ClassName title={"Class "+ studentClass} />
                    <ClassImage image={classImages[i++]}/>

                </Link>
            </div>
        )

        return (
            <div className="YourClasses">
                <Container >
                    <div className="titleContainer">
                        <h1> MY CLASSES</h1>
                    </div>
                </Container>
                <Container className="classesContainer">
                    <Row>
                        {studentClassNames}
                        <div id="newClass"  key={"newClass"} className="card">
                            <Link to={{pathname: '/NewClass'}}>
                                <ClassName title={"Create New Class"} />
                                {/* <ClassImage image={"image here"}/> */}
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

export default YourClasses;