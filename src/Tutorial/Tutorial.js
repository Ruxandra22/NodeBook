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
						<h1>ABOUT NODEBOOK</h1>
					</div>
				</Container>

				<div className="row">

					<Container >
						<div className="title_our_message">
							<h3>Our Message</h3>
						</div>
					</Container>
					<div className="col-md-3"></div>
					<div className="our_message">
						<div className="col-md-8">
							<iframe frameborder="0" width="560" height="315" src="https://biteable.com/watch/embed/nodebook-add-bdlabs-2270771" allowfullscreen="true" allow="autoplay"></iframe><p><a href="https://biteable.com/watch/nodebook-add-bdlabs-2270771"></a> <a href="https://biteable.com"></a>.</p>
						</div>
					</div>
				</div>
				
				
				<div className="row">
					<Container >
						<div className="title_tutorial">
							<h3>The Product</h3>
						</div>
					</Container>
					<div className="col-md-3"></div>
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
