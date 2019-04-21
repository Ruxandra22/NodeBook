import React, { Component } from "react";
import Link from "react-router-dom/es/Link";
import Row from "react-bootstrap/Row";

//import SaveButtonComponent from "./components/SaveButtonComponent";



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
          <image width={1641} height={541} xlinkHref="ComponentTMP_1-image.png" />
        </pattern>
      </defs>
      <rect className="a" width={127} height={42} />
    </svg>
  );


const SaveButtonComponent = () => (
    <svg width={117.188} height={37.613} viewBox="0 0 117.188 37.613">
      <defs>
        <style>
          {
            ".a{fill:url(#a);}.b{fill:#fff;font-size:18px;font-family:OpenSans-Regular, Open Sans;letter-spacing:0.002em;}"
          }
        </style>
        <linearGradient
          id="a"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#5e94b0" />
          <stop offset={1} stopColor="#507f98" />
        </linearGradient>
      </defs>
      <g transform="translate(-1125.812 -716.387)">
        <rect
          className="a"
          width={117.189}
          height={37.613}
          rx={7}
          transform="translate(1125.812 716.387)"
        />
        <g transform="translate(1029.785 555)">
          <text className="b" transform="translate(158 187)">
            <tspan x={-20.691} y={0}>
              {"SAVE"}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );

const CancelButtonComponent = () => (
    <svg width={117.188} height={37.613} viewBox="0 0 117.188 37.613">
      <defs>
        <style>
          {
            ".a{fill:#b9b9b9;}.b{fill:#fff;font-size:18px;font-family:OpenSans-Regular, Open Sans;letter-spacing:0.002em;}"
          }
        </style>
      </defs>
      <g transform="translate(-987.812 -716.387)">
        <rect
          className="a"
          width={117.189}
          height={37.613}
          rx={7}
          transform="translate(987.812 716.387)"
        />
        <g transform="translate(891.785 555)">
          <text className="b" transform="translate(158 187)">
            <tspan x={-33.603} y={0}>
              {"CANCEL"}
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );


class YourClasses extends Component {
 
    render() {
        let CancelButton = CancelButtonComponent();
        let SaveButton = SaveButtonComponent();
        let NodeBookLogo = Transparent_NodeBookComponent();
        return (
            <div className="YourClasses">
                <Row>
                    <p>This is where all your classes are!</p>
                    <Link to="/newClass">
                        <button>Create a new class!</button>
                    </Link>
                
                </Row>

                <Row>
                   {/* {NodeBookLogo} */}
                </Row>
                <Row>
                    {CancelButton}
                    {/*<CancelButton></CancelButton>*/}

                </Row>
                <Row>
                    <p>hellou :) </p>
                    {SaveButton}
                </Row>

            </div>
        );
    }
}

export default YourClasses;
