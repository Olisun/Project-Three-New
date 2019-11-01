import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

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
