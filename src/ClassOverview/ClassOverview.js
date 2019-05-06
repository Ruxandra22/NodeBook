import React, { Component } from "react";
import './ClassOverview.css';
import Container from "react-bootstrap/Container";

class ClassOverview extends Component {
    render() {
   
      return (
              <Container >
                  <div className="titleContainer">
                      <h1> Class Overview {this.props.match.params.id}</h1>
                  </div>
            </Container>
      )
    }
}
  

export default ClassOverview;