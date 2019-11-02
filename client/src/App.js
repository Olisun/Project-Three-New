import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Col, Row } from 'reactstrap';
import BudgetInput from './components/BudgetInputForm';
import WishlistInput from './components/WishlistInputForm';
import "./App.css"
import Rechart from './components/Chart';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Row>
            <Col sm={8}>
              <Row>
                <Col sm={6}>
                  <BudgetInput />
                </Col>
                <Col sm={6}>
                  <Rechart />
                </Col>
                <Col sm={6}>
                  <WishlistInput />
                </Col>
                <Col sm={6}>
                  <div className="test">
                    <h3>Wishlist</h3>
                  </div>
                </Col>
              </Row>
           </Col>
           <Col sm={4}>
            <div className="test">
              <h3>Bought</h3>
            </div>
           </Col>
          </Row>
        </div>
      </Router>
    );
  }
}

export default App;
