import React, { Component } from "react";
import './ClassOverview.css';
import Container from "react-bootstrap/Container";
import modelInstance from "../data/DataModel";

class ClassOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'INITIAL',
        }
    }

    componentDidMount(){
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