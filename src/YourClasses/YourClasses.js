import React, { Component } from "react";
import Link from "react-router-dom/es/Link";

//import React from "react";


const Transparent_NodeBookComponent = () => (
  <svg width={127} height={42} viewBox="0 0 127 42">
    <defs>
      <style>{".a{fill:url(#a);}"}</style>
      <pattern
        id="a"
        preserveAspectRatio="none"
        width="100%"
        height="100%"
        viewBox="0 0 1641 541"
      >
        <image width={1641} height={541} xlinkHref="/imgages/transparent_NodeBook.png" />
      </pattern>
    </defs>
    <rect className="a" width={127} height={42} />
  </svg>
);

//export default Transparent_NodeBookComponent;


class YourClasses extends Component {
    render() {
        return (
            <div className="Welcome">
                <p>This is where all your classes are!</p>
                <Link to="/new_class">
                    <button>Create a new class!</button>
                </Link>
            


                    <svg width={127} height={42} viewBox="0 0 127 42">
                        <defs>
                        <style>{".a{fill:url(#a);}"}</style>
                        <pattern
                            id="a"
                            preserveAspectRatio="none"
                            width="100%"
                            height="100%"
                            viewBox="0 0 1641 541"
                        >
                            <image width={1641} height={541} xlinkHref="/images/transparent_NodeBook.png" />
                        </pattern>
                        </defs>
                        <rect className="a" width={127} height={42} />
                    </svg>

            </div>
        );
    }
}

export default YourClasses;
