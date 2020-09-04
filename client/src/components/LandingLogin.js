import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LandingLogin = () => {

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = loginData;

    const onSubmit = (event) => {
        event.preventDefault()
        console.log('success')
    }

    const onChange = (event) => setLoginData({ ...loginData, [event.target.name]: event.target.value });

    const onClick = (event) => {

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

export default LandingLogin;