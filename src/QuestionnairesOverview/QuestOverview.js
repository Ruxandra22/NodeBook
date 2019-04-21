import React, { Component } from "react";
import Link from "react-router-dom/es/Link";

class QuestOverview extends Component {
    render() {
        return (
            <div className="Welcome">
                <p>This is the questionnaires overview!</p>
                <Link to="/newQuestionnaire">
                    <button>Create a new questionnaire!</button>
                </Link>
            </div>
        );
    }
}

export default QuestOverview;
