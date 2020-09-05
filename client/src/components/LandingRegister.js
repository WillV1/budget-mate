import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {setAlert} from '../actions/alert';
import {register} from '../actions/auth';
import PropTypes from 'prop-types';

const LandingRegister = ({setAlert, register, isAuthenticated}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    });

    const { name, email, password, password2 } = formData;

    const onSubmit = async (event) => {
        event.preventDefault();
        if(password !== password2) {
        setAlert('Passwords do not match', 'danger'
        )
        } else {
           register({name, email, password})
        }
    }

    const onChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });


    const onClick = (event) => {
  
    }

    //Redirect if registed
    if(isAuthenticated) {
        return <Redirect to="/login" /> 
     }

    return (
        <Form onSubmit={event => onSubmit(event)}>
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text"
                    placeholder="Enter name"
                    name="name"
                    onChange={event => onChange(event)}
                    value={name}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={event => onChange(event)}
                    value={email}
                    required
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                    placeholder="Password"
                    name="password"
                    onChange={event => onChange(event)}
                    value={password}
                    minLength="6"
                />
                <Form.Text id="passwordHelpBlock" muted>
                    Must be at least six characters long.
                    </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword2">
                <Form.Control type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    onChange={event => onChange(event)}
                    value={password2}
                    minLength="6"
                />
                <Form.Text id="passwordHelpBlock" muted>
                    Re-enter password
                    </Form.Text>
            </Form.Group>
            <Button variant="success" type="submit" onClick={event => onClick(event)}>
                Register
                </Button>
        </Form>
    )
}

LandingRegister.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {setAlert, register})(LandingRegister);