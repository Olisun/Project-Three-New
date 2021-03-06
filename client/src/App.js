import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './pages/main';
import LoginPage from './pages/LoginPage';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route path="/main/:id" component={Main} />
          </Switch>
      </Router>
    );
  }
}

export default App;
