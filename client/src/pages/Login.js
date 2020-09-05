import React from 'react';
import LandingLogin from '../components/LandingLogin';

import Container from 'react-bootstrap/Container'


const Login = () => {
    return (
        <Container className="landing">
            <h1>Login Here</h1>
            <LandingLogin />
        </Container>
    )
}

export default Login;