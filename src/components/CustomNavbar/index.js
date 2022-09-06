import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"
import "./style.css";
import Logo from '../../assets/huglifeLogoSM.jpeg';

function CustomNavbar() {
    return (

        <Navbar variant="dark" className="customNavbar">
            <Container>
                <Link to="/">
                    <img
                        alt="Codex Logo"
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top navbarLogo"
                    />{' '}
                </Link>
                <Link to="/" className="huglifeBrand">
                    HugLife Podcast
                </Link>
                <Nav align="end">
                    <Link to="/About" className="navbarItem">
                        About
                    </Link>
                    <br></br>
                    <Link to="/Contact" className="navbarItem">
                        Contact
                    </Link>.
                </Nav>
            </Container>
        </Navbar>

    )
}

export default CustomNavbar;