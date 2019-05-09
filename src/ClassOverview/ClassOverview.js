import React, { Component } from "react";
import './ClassOverview.css';
import Container from "react-bootstrap/Container";

import { Network, Node, Edge } from 'react-vis-network';
import Graph from "react-graph-vis";
import { render } from "react-dom";



const graph = {
    nodes: [
      { id: 1, label: "Matilda", color: "#e04141" },
      { id: 2, label: "Erik", color: "#e09c41" },
      { id: 3, label: "Thomas", color: "#e0df41" },
      { id: 4, label: "Rose", color: "#7be041" },
      { id: 5, label: "Viola", color: "#41e0c9" },
      { id: 6, label: "Rex", color: "#97e0c9" }
    ],
    edges: [{ from: 1, to: 2 }, { from: 1, to: 3 }, { from: 2, to: 4 }, { from: 2, to: 5 }, { from: 2, to: 1 }, { from: 2, to: 3 }]
  };
  
  const options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: "#000000"
    }
  };
  
  const events = {
    select: function(event) {
      var { nodes, edges } = event;
      console.log("Selected nodes:");
      console.log(nodes);
      console.log("Selected edges:");
      console.log(edges);
    }
  };

class ClassOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'INITIAL',
            nodes: ["Kata", "Tim", "Talha", "Viktoria", "Ruxi", "Neza", "Ariel", "Stranger", "LonelyOne"],
            edges: ["Kata", "Tim", "Talha", "Viktoria", "Ruxi", "Neza", "Ariel", "Stranger", "LonelyOne"],
            test: "Ruxi"
        }
    }


    render() {   

        let i = 0;
        let Nodes = this.state.nodes.map((node) =>
             <Node id={i++} label={node} />
        )

        let Edges = this.state.edges.map((edge) =>
                 <Edge id={i++} from={edge} to={this.state.test} />
        )

      return (
  
                  <div className="titleContainer">
                      <h1> Class Overview {this.props.match.params.id}</h1>

                    {/* 
                        <div id="mynetwork">
                        <Network>
                            <Node id="kata" label="KATAA" />
                            <Node id="vader" label="Darth Vader" />
                            <Node id="luke" label="Luke Skywalker" />
                            <Node id="leia" label="Leia Organa" />
                            <Node id="kata2" label="KATAA2" />
                            <Node id="vader2" label="Darth Vader2" />
                            <Node id="luke2" label="Luke Skywalker2" />
                            <Node id="leia2" label="Leia Organa2" />
                            <Edge id="1" from="vader" to="luke" />
                            <Edge id="2" from="vader" to="leia" />
                            <Edge id="3" from="vader2" to="luke2" />
                            <Edge id="4" from="vader2" to="leia2" />

                            {Nodes}
                            {Edges}
                        </Network>
                        </div> */}

                        <Graph graph={graph} options={options} events={events} style={{ height: "640px" }} />

                   </div>
                   

      )
      document.getElementById("root")
    }
}
  

export default ClassOverview;