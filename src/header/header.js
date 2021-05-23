import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import React, { Component } from 'react';
import ourTptLogo from '../ourTpt.png';
import './header.css'
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const { location } = this.props;
        return (
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="custom-header-styles justify-content-center">
                <Navbar.Brand href="/home"><img
                    src={ourTptLogo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Our Tirupati logo"
                /> Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav activeKey={location.pathname} className="mr-auto">
                        <Nav.Link href="/touristPlaces">Tourist places</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav activeKey={location.pathname}>
                        <Nav.Link href="/contact-us">Contact US</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));