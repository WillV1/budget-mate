import React from 'react';
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../actions/auth';


const NavBar = ({auth: {isAuthenticated, loading}, logout}) => {

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
                <Link onClick={logout} className="nav-link" to="/login">Logout</Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        </Container>
    )
}

Navbar.propTypes = {
    logout:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, {logout})(NavBar);