import React from 'react';
import {Link} from 'react-router-dom';
import LoginRegister from '../components/LandingRegister';

import Container from 'react-bootstrap/Container'


const Landing = () => {
    return (
        <Container className="landing">
            <h1>Welcome to Budget Mate</h1>
            <h3>Start here to begin</h3>
            <LoginRegister />
            <br />
            <h5>or <Link to="/login">Login</Link></h5>
        </Container>
    )
}

export default Landing;