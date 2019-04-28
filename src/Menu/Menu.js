import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
    MDBHamburgerToggler } from 'mdbreact';
import Link from "react-router-dom/es/Link";
import logo from "../images/transparent_NodeBook.PNG";
import login_icon from "../images/user_login.png";
import "./Menu.css";

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
                <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav left="true">
                        <MDBNavItem active="true">
                            <Link to="/">Home</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link to="/questionnaires">Questionnaires</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link to="/YourClasses">My Classes</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link to="#!">Tutorial</Link>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Link to="#!">Contact Us</Link>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default Menu;
