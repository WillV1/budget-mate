import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../actions/auth';


const LandingLogin = ({login, isAuthenticated}) => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = loginData;

    const onSubmit = (event) => {
        event.preventDefault()
        login(email, password);
    }

    const onChange = (event) => setLoginData({ ...loginData, [event.target.name]: event.target.value });

    const onClick = (event) => {

    }

//Redirect if logged in
    if(isAuthenticated) {
       return <Redirect to="/home" /> 
    }
    return (
        <Form onSubmit={event => onSubmit(event)}>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={event => onChange(event)}
                    value={email}
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                    placeholder="Password"
                    name="password"
                    onChange={event => onChange(event)}
                    value={password}
                />
            </Form.Group>
            <Button variant="success" type="submit" onClick={event => onClick(event)}>
                Login
                </Button>
        </Form>
    )
}

login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(LandingLogin);