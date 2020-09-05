import React from 'react';
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container'
import GoalsBlock from '../components/GoalsBlock';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Welcome extends React.Component {
    render() {
        return (
            //Want to dynamically time of day based on time
            <Container>
                <NavBar />
                <Row>
                    <Col xs={6} md={4}>  
                    </Col>
                    <Col xs={6} md={4}>
                        <h1 className="intro">Good morning!</h1>
                    </Col>
                    <Col xs={6} md={4}>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={4}>  
                    </Col>
                    <Col xs={6} md={4}>
                        <h4 className="intro">How can we help you?</h4>
                    </Col>
                    <Col xs={6} md={4}>
                    </Col>
                </Row>
                
                <GoalsBlock />
            </Container>
        )
    }
}

export default Welcome;