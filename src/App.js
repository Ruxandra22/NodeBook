import React, { Component } from "react";
import { Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import modelInstance from "./data/DataModel";
import "./App.css";
import Questionnaires from "./Questionnaires/Questionnaires";
import NewQuestionnaire from "./NewQuestionnaire/NewQuestionnaire";
import YourClasses from "./YourClasses/YourClasses";
import NewClass from "./NewClass/NewClass";
import ClassResults from "./ClassResults/ClassResults";
import Menu from "./Menu/Menu";
import ClassOverview from "./ClassOverview/ClassOverview";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "NodeBook"
    };
  }

  render() {
    return (
      <div className="App">

        <Menu/>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/questionnaires"
          render={() => <Questionnaires model={modelInstance} />}
        />
        <Route
            path="/newQuestionnaire"
            render={() => <NewQuestionnaire model={modelInstance} />}
        />
        <Route
            path="/yourClasses"
            render={() => <YourClasses model={modelInstance} />}
        />
        <Route
            path="/newClass"
            render={() => <NewClass model={modelInstance} />}
        />
        <Route
            path="/classResults"
            render={() => <ClassResults model={modelInstance} />}
        />
        </div>
    );
  }
}

export default App;
