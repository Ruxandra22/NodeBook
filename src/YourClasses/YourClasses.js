import React, { Component } from "react";
import './YourClasses.css';
import Link from "react-router-dom/es/Link";
import Row from "react-bootstrap/Row";
import CrossComponent from "../components/CrossComponent";
import modelInstance from "../data/DataModel";
import NewClass from "../NewClass/NewClass";
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

    constructor(props) {
        super(props);
        this.state = {
            status: 'INITIAL',
            teachersClasses: []
        }
    }


    componentDidMount(){


        modelInstance.getClassNames(1).then(result => {

            this.setState( {
                status: 'SUCCESS',
                teachersClasses: result.classes
            })
            console.log("result testing API", this.state.teachersClasses)

        }).catch(()=>{
            this.setState( {
                status: 'ERROR'
            })
            console.log("status", this.state.status);
        })
    }

    componentDidMount(){

            modelInstance.getClassNames(1).then(result => {
                this.setState( {
                    status: 'SUCCESS',
                    teachersClasses: result.classes
                })
                console.log("result testing API", this.state.teachersClasses)
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
        let studentClassNames = this.state.teachersClasses.map((studentClass) =>
            <div id="studentClass"  key={studentClass.name} className="card">
                <Link to={{pathname: '/ClassOverview/'+ studentClass.name}}>
                    <ClassName title={"Class "+ studentClass.name} />
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