import React, { Component } from "react";
import "./Welcome.css";
import Link from "react-router-dom/es/Link";

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <p>Welcome to NodeBook!</p>
          <Link to="/questionnaires_overview">
            <button>Go to questionnaires!</button>
          </Link>

          <Link to="/classes">
              <button>Go to the classes!</button>
          </Link>
      </div>
    );
  }
}

export default Welcome;
