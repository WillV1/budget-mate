import React from 'react';
import {Link} from 'react-router-dom';
import LoginRegister from '../components/LandingRegister';
import Button from 'react-bootstrap/Button'

const Landing = () => {
    return (
        <div>
            <h1>Welcome to Budget Mate</h1>
            <h3>Start here to begin</h3>
            <LoginRegister />
            <br />
            <h5>Or <Link to="/login">Login</Link></h5>
        </div>
    )
}

export default Landing;