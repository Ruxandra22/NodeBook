import React, { Component } from "react";
import './ClassOverview.css';
import Container from "react-bootstrap/Container";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Row from 'react-bootstrap/Row'
import Link from '@material-ui/core/Link';

import modelInstance from "../data/DataModel";
import { Network, Node, Edge } from 'react-vis-network';
import Graph from "react-graph-vis";
import { render } from "react-dom";




function getColor() {
    return "#" +  Math.random()
    .toString(16)
    .slice(2, 8)
  }

const graph = {
    // nodes: [
    //   { id: 1, label: "Matilda", color: "#e04141" },
    //   { id: 2, label: "Erik", color: "#e09c41" },
    //   { id: 3, label: "Thomas", color: "#e0df41" },
    //   { id: 4, label: "Rose", color: "#7be041" },
    //   { id: 5, label: "Viola", color: "#41e0c9" },
    //   { id: 6, label: "Rex", color: "#97e0e9" }
    // ],

    nodes: [

      { id: 0, label: "Matilda" , group: 0},

      {id: 1, label: "Kata", group: 1, shape: 'circularImage', image: require("../images/KataG.png" )},
      {id: 2, label: "Ruxi", group: 2, shape: 'circularImage', image: require("../images/RuxiG.png" )},
      {id: 3, label: "Talha", group: 3,shape: 'circularImage', image: require("../images/TalhaG.png" )},
      {id: 4, label: "Tim", group: 4, shape: 'circularImage', image: require("../images/TimG.png" )},
      {id: 5, label: "Victoria", group: 5, shape: 'circularImage', image: require("../images/VictoriaG.png" )},
      {id: 6, label: "Neza", group: 6, shape: 'circularImage', image: require("../images/NezaG.png" )},
      {id: 7, label: "Ariel", group: 7, shape: 'circularImage', image: require("../images/ArielG.png" )},

     
      { id: 8, label: "Erik" , group: 8},
      { id: 9, label: "Thomas" , group:9},
      { id: 10, label: "Rose", group:10},
      { id: 11, label: "Viola" , group:11},
      { id: 12, label: "Rex" , group:12},
      { id: 13 , label: "Ted" , group:13} , 
      {id: 14, label: "Joanna", group: 14},
      {id: 15, label: "Alex", group: 15},
      {id: 16, label: "Tom", group: 16},
      {id: 17, label: "Erik", group: 17},
      {id: 18, label: "Emma", group: 18},
      {id: 19, label: "Kate", group: 19},
      {id: 20, label: "Ross", group: 20}
    ],

    edges: [

      {from: 1, to: 2 },
        {from: 1, to: 3 },
        {from: 1, to: 4 },
        {from: 2, to: 5 },
        {from: 2, to: 6 },
        {from: 2, to: 7 },
        {from: 3, to: 1 },
        {from: 3, to: 2 },
        {from: 3, to: 3 },
        {from: 4, to: 3 },
        {from: 4, to: 5 },
        {from: 4, to: 6 },
        {from: 5, to: 4 },
        {from: 5, to: 6 },
        {from: 6, to: 7 },
        {from: 6, to: 1 },
        {from: 7, to: 2 },
        {from: 7, to: 3 },
        {from: 7, to: 4 },

        { from: 0, to: 8 }, 
        { from: 8, to: 0 }, 
        { from: 13, to: 17 }, 
        { from: 17, to: 20 }, 
        { from: 19, to: 18 }, 
        // { from: 18, to: null },
        {from: 8, to: 9},
        {from: 9, to: 8},
        {from: 10, to: 9},
        {from: 11, to: 12},
        {from: 12, to: 11},
        {from: 13, to: 14},
        {from: 13, to: 8},
        {from: 14, to: 9},
        {from: 14, to: 8}
    ]
  };
  
  const options = {
    
    autoResize: true,
    height: '100%',
    width: '100%',
    layout: {
      hierarchical: false
    },
    fit:{
      animation: { // -------------------> can be a boolean too!
        duration: Number,
        easingFunction: String
      }
    },
    edges: {
      width: 3,
      length: 120
    },
    nodes: {
      shape: 'dot',
      size: 20,
      font: {
          size: 25,
          color: '#000000'
      },
      borderWidth: 3,
      borderWidthSelected: 9,
      shadow:{
        color: '#000000',
      },
  },
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

        //work in progress
        let Edges = this.state.edges.map((edge) =>
                 <Edge id={i++} from={edge} to={this.state.test} />
        )

      return (
  
          <div className="classOverview">
              <div className="titleContainer">
                      <h1> Class Overview {this.props.match.params.id}</h1>
              </div>
     
              <div className="results">
                  <Row>      
                        <Grid item xs={12} sm={9} md={9} lg={9} xl={9} >
                            <Graph graph={graph} options={options} events={events} style={{ height: "750px" }} getNetwork={network => {
                              //  if you want access to vis.js network api you can set the state in a parent component using this property
                              }}/>
                        </Grid>
                        
                        <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                            
                            <div className="resultHistory">
                              <Typography>
                                      <Link href={"wherever"} color="inherit">
                                            here the list of older results
                                      </Link>
                              </Typography> 
                            </div>
                        </Grid>
                  </Row>
              </div> 
          </div>
                       

          )
    }

    componentDidMount() {
        // for now, the classID is hardcoded
        modelInstance.getClassOverviewData("1").then(result => {
            this.setState({
                status: 'LOADED',
                experiments: result.experiments,
            })
            console.log(this.state.students);
        }).catch(() => {
            this.setState({
                status: 'ERROR'
            })
        });
    }
}
  

export default ClassOverview;