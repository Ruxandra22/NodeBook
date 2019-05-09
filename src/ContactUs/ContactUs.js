import React, { Component } from "react";
import './ContactUs.css';
import Ariel from '../images/Ariel.png';
import Kata from '../images/Kata.png';
import Neza from '../images/Neza.png';
import Ruxi from '../images/Ruxi.png';
import Victoria from '../images/Victoria.png';
import Tim from '../images/Tim.png';
import Talha from '../images/Talha.png';
import { MDBContainer, MDBCol, MDBCard, MDBCardBody} from "mdbreact";
import Row from "react-bootstrap/Row";

class ContactUs extends Component {
	render() {
		return (
			<MDBContainer>
				<section className="text-center" >
					<h2 className="h1-responsive my-5 contact">
						The support team is here to help you
					</h2>
					<h3> contactus@nodebook.com </h3>
					<Row className="team">
						<MDBCol lg="3" md="6" className="mt-5 mr-4">
							<MDBCard testimonial>
								<img className="mx-auto"
									 src={Neza}
									 alt="Neza"
								/>
								<MDBCardBody>
									<h4 className="font-weight-bold mb-4">Neza</h4>
									<hr />
									<p className="dark-grey-text mt-4">
									UX & Front-End
									</p>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
						<MDBCol lg="3" md="6" className="mt-5 mr-4">
							<MDBCard testimonial>
								<img className="mx-auto"
									 src={Kata}
									 alt="Kata"
								/>
								<MDBCardBody>
									<h4 className="font-weight-bold mb-4">Kata</h4>
									<hr />
									<p className="dark-grey-text mt-4">
									UX & Front-End
									</p>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
						<MDBCol lg="3" md="6" className="mt-5 mr-4">
							<MDBCard testimonial>
								<img className="mx-auto"
									 src={Ruxi}
									 alt="Ruxi"
								/>
								<MDBCardBody>
									<h4 className="font-weight-bold mb-4">Ruxi</h4>
									<hr />
									<p className="dark-grey-text mt-4">
									 Front-End developer
									</p>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
						<MDBCol lg="2" md="6" className="mt-5">
							<MDBCard testimonial>
								<img className="mx-auto"
									 src={Talha}
									 alt="Talha"
								/>
								<MDBCardBody>
									<h4 className="font-weight-bold mb-4">Talha</h4>
									<hr />
									<p className="dark-grey-text mt-4">
										Security
									</p>	
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</Row>
					<Row>
						<MDBCol lg="3" md="6" className="mt-5 mr-5 ml-5">
							<MDBCard testimonial>
								<img className="mx-auto"
									 src={Tim}
									 alt="Tim"
								/>
								<MDBCardBody>
									<h4 className="font-weight-bold mb-4">Tim</h4>
									<hr />
									<p className="dark-grey-text mt-4">
										Marketing
									</p>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
						<MDBCol lg="3" md="6" className="mt-5 mr-5">
							<MDBCard testimonial>
								<img className="mx-auto"
									 src={Victoria}
									 alt="Victoria"
								/>
								<MDBCardBody>
									<h4 className="font-weight-bold mb-4">Victoria</h4>
									<hr />
									<p className="dark-grey-text mt-4">
										Business Analyst
									</p>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
						<MDBCol lg="3" md="6" className="mt-5 mr-5">
							<MDBCard testimonial>
								<img className="mx-auto"
									 src={Ariel}
									 alt="Ariel"
								/>
								<MDBCardBody>
									<h4 className="font-weight-bold mb-4">Ariel</h4>
									<hr />
									<p className="dark-grey-text mt-4">
										Back-End
									</p>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</Row>
				</section>
			</MDBContainer>
		);
	}
}

export default ContactUs;
