import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
    MDBHamburgerToggler } from 'mdbreact';
import Link from "react-router-dom/es/Link";
import logo from "../images/transparent_NodeBook.PNG";
import login_icon from "../images/user_login.png";
import "./Menu.css";
import NavContext from "react-bootstrap/es/NavContext";
import Nav from "react-bootstrap/Nav";
import {SideNav} from "react-sidenav";

class Menu extends Component {
    state = {
        collapse: false,
        collapseID: ''
    }

    toggleSingleCollapse = collapseId => {
        this.setState({
            ...this.state,
            [collapseId]: !this.state[collapseId]
        });
    }

    render() {

        return (
            <MDBNavbar color="white" style={{ marginTop: '0px'}} >
                <MDBHamburgerToggler className="menuHamburger" id="menu" color="#000000" onClick={()=> this.toggleSingleCollapse('collapse')} />
                {/*<Link to="/">*/}
                    <img className="logo" src={logo} alt="NodeBook Logo" width="164px" height="54px"/>
                {/*</Link>*/}
                <MDBNavbarBrand>
                    <Link to={{pathname: '/teacherProfile'}}>
                             Teacher's Name
                             <img className="login-icon" src={login_icon} alt={"Login Icon"} width="38px" height="38px"/>
                    </Link>
                </MDBNavbarBrand>
                <MDBCollapse className="w-25 p-3 menu_content" isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav>
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
