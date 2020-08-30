import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class LandingLogin extends React.Component {

    state = {
        email: "",
        password: ""
    }

    handleFormSubmit() {

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
                    onChange={(event => this.setState({email:event.target.value}))}
                    value={this.state.email}
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                    placeholder="Password" 
                    onChange={(event => this.setState({password:event.target.value}))}
                    value={this.state.password}
                    />
                </Form.Group>
                <Button variant="success" type="submit" onClick={this.handleClick}>
                    Register
                </Button>
            </Form>
        )
    }
}

export default LandingLogin;