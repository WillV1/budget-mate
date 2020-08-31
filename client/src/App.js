import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Welcome from './pages/Welcome';
import AddBudgetItem from './pages/AddBudgetItem';
import ViewBudget from './pages/ViewBudget';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Landing from './pages/Landing';
import Goals from './pages/Goals';

function App() {
  return (
    <Router>
      <div>
        <Container>
          <Switch>
            <Route exact path="/add" component={AddBudgetItem} />
            <Route exact path="/view" component={ViewBudget} />
            <Route exact path="/goals" component={Goals} />
            <Route exact path="/home" component={Welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Landing} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </div>
    </Router>
  )
}

export default App;
