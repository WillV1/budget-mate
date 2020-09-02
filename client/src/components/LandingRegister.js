import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LandingRegister extends React.Component {

    state = {
        name: "",
        email: "",
        password: ""
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleClick = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.handleFormSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                        placeholder="Enter name"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Must be at least six characters long.
                    </Form.Text>
                </Form.Group>
                <Button variant="success" type="submit" onClick={this.handleClick}>
                    Register
                </Button>
            </Form>
        )
    }
}

export default LandingRegister;