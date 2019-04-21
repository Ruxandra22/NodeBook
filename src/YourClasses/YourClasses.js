import React, { Component } from "react";
import './YourClasses.css';
import Link from "react-router-dom/es/Link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//import SaveButtonComponent from "./components/SaveButtonComponent";

import SaveButton from '../components/SaveButtonComponent';
import CancelButton from '../components/CancelButtonComponent';
import NodeBookLogo from '../components/Transparent_NodeBookComponent';

import Image from 'react-bootstrap/Image'


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

    render() {
        let SaveBtn = SaveButton();
        let CancelBtn = CancelButton();
        let StudentClass = "Class 9A";
       // let NodeBookLogo = NodeBookLogo();
        return (
            <div className="YourClasses">
                <Row>
                    <p>This is where all your classes are!</p>
                    <Link to="/new_class">
                        <button>Create a new class!</button>
                    </Link>

                </Row>
                <Row>
                    <div id="StudentClass"  key={StudentClass} className="card">
                        <Link to={{pathname: '/ClassOverview/'+StudentClass}}>
                             <ClassName title={StudentClass} />
                             <ClassImage image={"/images/class5.jpg"} />
                             
                        </Link>
                    </div>
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
