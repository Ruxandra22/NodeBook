import React, { Component } from 'react';
import {
    MDBNavbar, MDBNavbarNav, MDBNavItem, MDBCollapse,
    MDBNavbarToggler
} from 'mdbreact';
import Link from "react-router-dom/es/Link";
import logo from "../images/transparent_NodeBook.PNG";
import login_icon from "../images/user_login.png";
import "./Menu.css";

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
                {/*<Link to="/">*/}
                    <img className="logo" src={logo} alt="NodeBook Logo" width="164px" height="54px"/>
                {/*</Link>*/}
                {/*<MDBNavbarBrand>*/}
                    <Link to={{pathname: '/teacherProfile'}}>
                         Teacher's Name
                         <img className="login-icon" src={login_icon} alt={"Login Icon"} width="38px" height="38px"/>
                    </Link>
                {/*</MDBNavbarBrand>*/}
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
                            <Link to="/Tutorial" className="tutorial">Tutorial</Link>
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
