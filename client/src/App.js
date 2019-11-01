import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BudgetInput from './components/BudgetInputForm';
import WishlistInput from './components/WishlistInputForm';
// import Chart from './components/Rechart';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="container">
        <BudgetInput />
        <WishlistInput />
        {/* <Rechart /> */}
      </div>
      </Router>

    );
  }
}

export default App;
