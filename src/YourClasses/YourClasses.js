import React, { Component } from "react";
import './YourClasses.css';
import Link from "react-router-dom/es/Link";
import Row from "react-bootstrap/Row";
import classImage from "../images/class5.jpg"
//import SaveButtonComponent from "./components/SaveButtonComponent";

import SaveButton from '../components/SaveButtonComponent';
import CancelButton from '../components/CancelButtonComponent';
import modelInstance from "../data/DataModel";
import { CardGroup } from "mdbreact";


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
        <h2>Class 9A</h2>
        </div>
    )
    }
}

class YourClasses extends Component {


    // componentDidMount(){
    //     modelInstance.getClassNames().then(cards => {
    //         this.setState( {
    //             status: 'SUCCESS'
    //         })
    //         console.log("result", cards)
    //     }).catch(()=>{
    //         this.setState( {
    //             status: 'ERROR'
    //         })
    //     })
   // }
    render() {
        let SaveBtn = SaveButton();
        let CancelBtn = CancelButton();
        let StudentClass = "Class 9A";
       // let NodeBookLogo = NodeBookLogo();
      console.log(modelInstance.getClassNames());
       let cardsList = modelInstance.getClassNames().map((card) =>
                <div id="StudentClass"  key={StudentClass} className="card">
                    <Link to={{pathname: '/ClassOverview/'+StudentClass}}>
                            <ClassName title={StudentClass} />
                            <ClassImage image={classImage}/>

                    </Link>
                    <p> {card}</p>
                </div>
            )

        return (
            <div className="YourClasses">
                <Row>
                    <p>This is where all your classes are!</p>
                    <Link to="/newClass">
                        <button>Create a new class!</button>
                    </Link>

                </Row>

                

                <Row>
                    <div id="StudentClass"  key={StudentClass} className="card">
                        <Link to={{pathname: '/ClassOverview/'+StudentClass}}>
                             <ClassName title={StudentClass} />
                             <ClassImage image={classImage}/>

                        </Link>
                    </div>
                </Row>
                <Row>
                   <p>TEST LOOP</p>
                   {cardsList}
                </Row>
                <Row>
                    {CancelBtn}
                </Row>
                <Row>
                    {SaveBtn}
                </Row>
                <Row>
                    {/* {NodeBookLogo} */}
                </Row>

            </div>


        );
    }
}

export default YourClasses;
