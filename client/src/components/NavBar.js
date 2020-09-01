import React from 'react';
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



const NavBar = () => {

    return (
        <Container fluid="true">
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Navbar.Brand href="#home">Budget Mate</Navbar.Brand>    
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Link className="nav-link" to="/add">Add Items</Link>
                <Link className="nav-link" to="/view">View Budget</Link>
                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/login">Logout</Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Container>
    )
}

export default NavBar;