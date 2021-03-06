import React, { Component } from "react";
import './ClassOverview.css';
import modelInstance from "../data/DataModel";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Row from 'react-bootstrap/Row'

import Graph from "react-graph-vis";

    const options = {
        autoResize: true,
        height: '100%',
        width: '100%',
        layout: {
            hierarchical: false
        },
        fit: {
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
            shadow: {
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
            nodes: [],
            edges:[],
            questionText: "",
            experimentId: 1,
            questionnaireResults: []
        }
    }

    componentDidMount() {

        modelInstance.getQuestionnaireResults(this.state.experimentId).then(result => {
            console.log("test get questionnaire results",result);
            this.setState({
                status: 'SUCCESS',
                questionnaireResults: result,
                nodes: result.nodes,
                edges: result.questions[0].edges,
                questionText: result.questions[0].text,
            });
        }).catch(()=>{
            this.setState({
                status: 'ERROR'
            });
            console.log("status", this.state.status);
        })
    }


    render() {
        //load API questionnaire results to the graph
        let graph = {nodes: this.state.nodes, edges: this.state.edges};
        //hard code load our results
        let imgs = [
            require("../images/ArielG.png"),
            require("../images/RuxiG.png"),
            require("../images/KataG.png") ,
            require("../images/VictoriaG.png"),
            require("../images/NezaG.png"),
            require("../images/TimG.png"),
            require( "../images/TalhaG.png")];
        for (let i=0; i<7;i++ ) {
            if (graph.nodes[i] != null) {
                graph.nodes[i].shape = 'circularImage';
                graph.nodes[i].image = imgs[i];
            }
        }

        return (
        <div className="classOverview">
            <div className="titleContainer">
                 <h1> {this.state.questionText} </h1>
                 <h5> Class Overview {this.props.match.params.id}  </h5>
                {/* <h1> Class Overview {this.props.match.params.id} </h1> */}
                {/* <h5> {this.state.questionText} </h5> */}
            </div>
            <div className="results">
                <Row>
                    <Grid item xs={12} sm={9} md={9} lg={9} xl={9}>
                        <Graph
                        graph={graph}
                        options={options}
                        events={events}
                        style={{ height: "750px" }}
                        getNetwork={network => {
                            //  if you want access to vis.js network api you can set the state in a parent component using this property
                            }}/>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
                        <div className="resultHistory">
                            <Typography>
                                {/* <Link href={"wherever"} color="inherit">
                                        here the list of older results
                                </Link> */}
                                <h4> Result history </h4>
                                Here you can see your history of questionnaire results.
                                You have currently no past questionnaire results.
                            </Typography>
                        </div>
                    </Grid>
                </Row>
            </div>
        </div>
        )
    }
}


export default ClassOverview;