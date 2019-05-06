import React, { Component } from 'react';
import {Container} from "mdbreact";
import './Tutorial.css';

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
					<div className="col-md-4"></div>
					<div className="col-md-8">
						<div className="span6">
							<video className="tutorial_video" width="400" controls autoPlay="true" loop="true">
								<source src="https://media.giphy.com/media/MOWPkhRAUbR7i/giphy.mp4" type="video/mp4"/>
							</video>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Tutorial;
