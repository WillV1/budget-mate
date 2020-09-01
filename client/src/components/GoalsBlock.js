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
      console.log(this.state.value);
    }

    handleClick = () => {
      const { input, goals } = this.state;
      if (input) {
        const nextState = [...goals, input];
        this.setState({ goals: nextState, input: '' });
      }
    }

    render() {
        return (
            <div>
              <h3>Add Financial Goals Here:</h3>
              <Form onSubmit={this.handleFormSubmit}>
              <Form.Row>
                <Col>
                  <Form.Control value={this.state.input} onChange={(e) => this.setState({input: e.target.value})} placeholder="Enter goal here" />
                </Col>
              </Form.Row>
              <Button variant="success" type="submit" onClick={this.handleClick}>
                      Add
                  </Button>
              </Form>
            </div>
        )
    }
}

export default GoalsBlock;