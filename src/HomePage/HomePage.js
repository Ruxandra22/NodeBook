import React, { Component } from "react";
import "./HomePage.css";
import classImage from "../images/classroom.png";
import Container from "react-bootstrap/Container";
import Link from "react-router-dom/es/Link";

class HomePage extends Component {
  render() {
    return (
      <div className="Welcome">
          <h1 className="home_title">Latest Results</h1>
          <div uk-slideshow="true">
              <ul className="uk-slideshow-items">
                  <li>
                      <Class1/>
                  </li>
                  <li>
                      <Class2/>
                  </li>
                  <li>
                      <Class3/>
                  </li>
              </ul>
              <div className="uk-position-bottom-center uk-position-small">
                  <ul className="uk-dotnav">
                      <li uk-slideshow-item="0"><a href="#">Item 1</a></li>
                      <li uk-slideshow-item="1"><a href="#">Item 2</a></li>
                      <li uk-slideshow-item="2"><a href="#">Item 3</a></li>
                  </ul>
              </div>
          </div>
      </div>
    );
  }
}

class Class1 extends Component {
    render() {
        let date = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        let year = new Date().getFullYear(); //Current Year
        let studentClass = "10A"
        return (
          <div className="class">
              <Link to={{pathname: '/ClassOverview/'+ studentClass}}>
                  <Container className="card">
                    <h1> Class {studentClass}
                        <img src={classImage} alt="Class Photo" width="128px" height="80"/>
                    </h1>
                    {date}.{month}.{year}
                  </Container>
              </Link>
          </div>
        );
    }
}

class Class2 extends Component {
    render() {
        let date = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        let year = new Date().getFullYear(); //Current Year
        let studentClass = "10B"
        return (
            <div className="class">
                <Link to={{pathname: '/ClassOverview/'+ studentClass}}>
                    <Container className="card">
                        <h1> Class {studentClass}
                            <img src={classImage} alt="Class Photo" width="128px" height="80"/>
                        </h1>
                        {date}.{month}.{year}
                    </Container>
                </Link>
            </div>
        );
    }
}

class Class3 extends Component {
    render() {
        let date = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        let year = new Date().getFullYear(); //Current Year
        let studentClass = "10C";
        return (
            <div className="class">
                <Link to={{pathname: '/ClassOverview/'+ studentClass}}>
                    <Container className="card">
                        <h1> Class {studentClass}
                            <img src={classImage} alt="Class Photo" width="128px" height="80"/>
                        </h1>
                        {date}.{month}.{year}
                    </Container>
                </Link>
            </div>
        );
    }
}
export default HomePage;
