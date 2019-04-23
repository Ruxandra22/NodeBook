import React, { Component } from "react";
import './ClassOverview.css';
import Link from "react-router-dom/es/Link";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

class ClassOverview extends Component {
    render() {
   
      return (
              <Container >
                  <div className="titleContainer">
                      <h1> CLASS OVERVIEW {this.props.match.params.id}</h1>
                  </div>
            </Container>
      )
    }
}
  

export default ClassOverview;