import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LandingLogin extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleFormSubmit(event) {
        event.preventDefault()
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClick(event){
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleFormSubmit}>
                
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" 
                    placeholder="Enter email" 
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                    placeholder="Password" 
                    onChange={this.handleChange}
                    value={this.state.password}
                    />
                </Form.Group>
                <Button variant="success" type="submit" onClick={this.handleClick}>
                    Login
                </Button>
            </Form>
        )
    }
}

export default LandingLogin;