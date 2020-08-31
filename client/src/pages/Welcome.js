import React from 'react';
import NavBar from '../components/NavBar';

class Welcome extends React.Component {
    render() {
        return(
            //Want to dynamically time of day based on time
            <div>
                <NavBar />
                <h1>Good morning!</h1>
                <h4>How can we help you?</h4>
            </div>
        )
    }
}

export default Welcome;