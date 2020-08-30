import React from 'react';
import NavBarTwo from '../components/NavBarTwo';

class Welcome extends React.Component {
    render() {
        return(
            //Want to dynamically time of day based on time
            <div>
                <NavBarTwo />
                <h1>Good morning!</h1>
                <h4>How can we help you?</h4>
            </div>
        )
    }
}

export default Welcome;