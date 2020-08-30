import React from 'react';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Welcome from '../pages/Welcome';
import AddBudgetItem from '../pages/AddBudgetItem';
import ViewBudget from '../pages/ViewBudget';
import Register from '../pages/Register';
import Login from '../pages/Login';



const NavBarTwo = () => {

    return (
        <div>
            <Link to="/add">Add Items</Link>
            <Link to="/view">View Budget</Link>
            <Link to="/login">Logout</Link>
        </div>
    )
}

export default NavBarTwo;