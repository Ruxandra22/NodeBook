import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
    MDBHamburgerToggler } from 'mdbreact';
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
            <MDBNavbar color="white" style={{ marginTop: '0px', width:'1422px'}} >
                <MDBHamburgerToggler className="menuHamburger" id="menu" color="#2E2E2E" onClick={()=> this.toggleSingleCollapse('collapse')} />
                <img className="logo" src={logo} alt="NodeBook Logo" width="164px" height="54px"/>
                <MDBNavbarBrand>
                    <img src={login_icon} alt={"Login Icon"} width="38px" height="38px"/>
                    Name of the professor!
                </MDBNavbarBrand>
                <MDBCollapse isOpen={this.state.collapse} navbar>
                    <MDBNavbarNav left="true">
                        <MDBNavItem active="true">
                            <MDBNavLink to="/">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/questionnairesOverview">Questionnaires</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/YourClasses">My classes</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Tutorial</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="#!">Contact Us</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default Menu;
