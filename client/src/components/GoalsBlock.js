import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

class GoalsBlock extends React.Component {
    state = {
      input: '',
      goals: []
    };

    handleFormSubmit = (event) => {
      event.preventDefault();
    }

    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
      console.log(event.target.value)
  }

    handleClick = (event) => {
      event.preventDefault()
    }

    render() {
        return (
            <div>
              <h3>Add Financial Goals Here:</h3>
              <Form onSubmit={this.handleFormSubmit}>
              <Form.Row>
                <Col>
                  <Form.Control value={this.state.input} onChange={this.handleChange} name="goals" placeholder="Enter goal here" />
                </Col>
              </Form.Row>
              <Button variant="success" type="submit" onClick={this.handleClick}>
                      Add Goal
                  </Button>
              </Form>
            </div>
        )
    }
}

export default GoalsBlock;