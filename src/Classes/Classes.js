import React, { Component } from "react";
import Link from "react-router-dom/es/Link";

class Classes extends Component {
    render() {
        return (
            <div className="Welcome">
                <p>This is where all your classes are!</p>
                <Link to="/new_class">
                    <button>Create a new class!</button>
                </Link>
            </div>
        );
    }
}

export default Classes;
