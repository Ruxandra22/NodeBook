import React, { Component } from "react";
import './ClassOverview.css';
import Container from "react-bootstrap/Container";

import { Network, Node, Edge } from 'react-vis-network';

class ClassOverview extends Component {
      
    render() {   



      return (
              <Container >
                  <div className="titleContainer">
                      <h1> Class Overview {this.props.match.params.id}</h1>


                        <div id="mynetwork"></div>
                        <Network>
                             <Node id="kata" label="KATAA" />
                            <Node id="vader" label="Darth Vader" />
                            <Node id="luke" label="Luke Skywalker" />
                            <Node id="leia" label="Leia Organa" />
                            <Edge id="1" from="vader" to="luke" />
                            <Edge id="2" from="vader" to="leia" />
                        </Network>
                      
                        </div>
            </Container>
      )
    }
}
  

export default ClassOverview;