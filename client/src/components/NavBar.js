import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Welcome from '../pages/Welcome';
import AddBudgetItem from '../pages/AddBudgetItem';
import ViewBudget from '../pages/ViewBudget';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import Login from '../pages/Login';

const Navigation = () => {

    return (
        <Link to="/login">Login</Link>
    )
}

export default Navigation;