import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from './pages/Main';
import LoginPage from './pages/LoginPage';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={LoginPage} />
          </Switch>
      </Router>
    );
  }
}

export default App;
