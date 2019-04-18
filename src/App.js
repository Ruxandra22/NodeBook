import React, { Component } from "react";
import { Route } from "react-router-dom";
import Welcome from "./Welcome/Welcome";
import modelInstance from "./data/DataModel";
import "./App.css";
import QuestOverview from "./QuestionnairesOverview/QuestOverview";
import NewQuestionnaire from "./NewQuestionnaire/NewQuestionnaire";
import YourClasses from "./YourClasses/YourClasses";
import NewClass from "./NewClass/NewClass";
import ClassResults from "./ClassResults/ClassResults";
//import SaveButtonComponent from ".components/SaveButtonComponent";

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
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>

          <Route exact path="/" component={Welcome} />
          <Route
            path="/questionnaires_overview"
            render={() => <QuestOverview model={modelInstance} />}
          />
          <Route
              path="/new_questionnaire"
              render={() => <NewQuestionnaire model={modelInstance} />}
          />
          <Route
              path="/YourClasses"
              render={() => <YourClasses model={modelInstance} />}
          />
          <Route
              path="/new_class"
              render={() => <NewClass model={modelInstance} />}
          />
          <Route
              path="/class_results"
              render={() => <ClassResults model={modelInstance} />}
          />
        </header>
      </div>
    );
  }
}

export default App;
