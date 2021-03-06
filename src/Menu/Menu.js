import React, { Component } from 'react';
import {
    MDBNavbar, MDBNavbarNav, MDBNavItem, MDBCollapse,
    MDBNavbarToggler
} from 'mdbreact';
import { Link } from "react-router-dom";
import logo from "../images/transparent_NodeBook.PNG";
import "./Menu.css";
import Typography from '@material-ui/core/Typography';

class Menu extends Component {

    state = {
        collapseID: ''
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
    }

    render() {

        return (
            <MDBNavbar color="white" light>
                <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse')} />
                <Link to="/">
                	<img className="logo" src={logo} alt="NodeBook Logo" width="164px" height="54px"/>
				</Link>
                <Typography>
                    <Link to="/teacherProfile" className="link">
                         Tina Erklund
                        <img className="login-icon" src={require("../images/teacher.png")} alt={"Login Icon"} width="38px" height="38px"/>
                    </Link>
                </Typography>

                <MDBCollapse  id="navbarCollapse" className="w-25 p-3 menu_content" isOpen={this.state.collapseID} navbar>
                    <MDBNavbarNav onClick={this.toggleCollapse('navbarCollapse')} >
                        <MDBNavItem>
                            <Link to="/" className="home">Home</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link to="/Questionnaires" className="questionnaire">Questionnaires</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link to="/YourClasses" className="my_classes">My Classes</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link to="/Tutorial" className="tutorial">The Product</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link to="/ContactUs" className="contact_us">Contact Us</Link>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default Menu;
