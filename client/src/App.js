import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Welcome from './pages/Welcome';
import AddBudgetItem from './pages/AddBudgetItem';
import ViewBudget from './pages/ViewBudget';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Landing from './pages/Landing';
import Alert from './components/Alert';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
    <Router>
      <div>
        <Container>
        <Alert />
          <Switch>
            <Route exact path="/add" component={AddBudgetItem} />
            <Route exact path="/view" component={ViewBudget} />
            <Route exact path="/home" component={Welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Landing} />
            <Route component={NotFound} />
          </Switch> 
        </Container>
      </div>
    </Router>
    </Provider>
  )
}

export default App;
