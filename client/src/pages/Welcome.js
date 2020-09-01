import React from 'react';
import {Link} from 'react-router-dom';
import NavBar from '../components/NavBar';
import GoalsBlock from '../components/GoalsBlock';
import Button from 'react-bootstrap/Button';


class Welcome extends React.Component {
    render() {
        return(
            //Want to dynamically time of day based on time
            <div>
                <NavBar />
                <h1>Good morning!</h1>
                <h4>How can we help you?</h4>
                <GoalsBlock />
                <Link to="/goals"><Button variant="success" type="submit" onClick={this.handleClick}>
                    Add Goal </Button></Link>
            </div>
        )
    }
}

export default Welcome;