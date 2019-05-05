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
import TeacherProfile from "./TeacherProfile/TeacherProfile";
import SaveQuest from "./SaveQuest/SaveQuest";
import Tutorial from "./Tutorial/Tutorial";
import ContactUs from "./ContactUs/ContactUs";


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
          path="/Questionnaires"
          render={() => <Questionnaires model={modelInstance} />}
        />
        <Route
            path="/newQuestionnaire"
            render={() => <NewQuestionnaire model={modelInstance} />}
        />
          <Route
              path="/saveQuestionnaire"
              render={() => <SaveQuest model={modelInstance} />}
          />
        <Route
            path="/yourClasses"
            render={() => <YourClasses model={modelInstance} />}
        />
        <Route
            path="/classOverview/:id"
            render={(props) => <ClassOverview {...props} model={modelInstance} />}
        />
        <Route
            path="/newClass"
            render={() => <NewClass model={modelInstance} />}
        />
        <Route
            path="/classResults"
            render={() => <ClassResults model={modelInstance} />}
        />
        <Route
            path="/teacherProfile"
            render={() => <TeacherProfile model={modelInstance} />}
        />
        <Route
            path="/Tutorial"
            render={() => <Tutorial model={modelInstance} />}
        />
          <Route
              path="/ContactUs"
              render={() => <ContactUs model={modelInstance} />}
          />
        </div>
    );
  }
}

export default App;
