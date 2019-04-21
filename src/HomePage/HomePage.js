import React, { Component } from "react";
import "./HomePage.css";
import logo from "../images/transparent_NodeBook.PNG";
import classImage from "../images/classroom.png";

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
        return (
          <div className="class">
            <h1> Class 10A
                <img src={classImage} alt="Class Photo" width="128px" height="80"/>
            </h1>
            {date}.{month}.{year}
          </div>
        );
    }
}

class Class2 extends Component {
    render() {
        let date = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        let year = new Date().getFullYear(); //Current Year
        return (
            <div className="class">
                <h1> Class 10B
                    <img src={classImage} alt="Class Photo" width="128px" height="80"/>
                </h1>
                {date}.{month}.{year}
            </div>
        );
    }
}

class Class3 extends Component {
    render() {
        let date = new Date().getDate(); //Current Date
        let month = new Date().getMonth() + 1; //Current Month
        let year = new Date().getFullYear(); //Current Year
        return (
            <div className="class">
                <h1> Class 10C
                    <img src={classImage} alt="Class Photo" width="128px" height="80"/>
                </h1>
                {date}.{month}.{year}
            </div>
        );
    }
}
export default HomePage;
