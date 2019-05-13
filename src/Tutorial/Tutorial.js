import React, { Component } from 'react';
import {Container} from "mdbreact";
import './Tutorial.css';
import tutorialVideo from '../videos/Tutorial.mp4';

class Tutorial extends Component {

	render() {

		return (
			<div className="Tutorial">
				<Container >
					<div className="title_tutorial">
						<h1>TUTORIAL</h1>
					</div>
				</Container>
				<div className="row">
					<div className="col-md-2"></div>
					<div className="col-md-8">
						<video className="tutorial_video" width="1000" controls autoPlay="true">
							<source src={tutorialVideo}/>
						</video>
					</div>
				</div>
			</div>
		);
	}
}

export default Tutorial;
