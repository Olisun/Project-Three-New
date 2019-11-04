import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Col, Row } from 'reactstrap';
import BudgetInput from './components/BudgetInputForm';
import WishlistInput from './components/WishlistInputForm';
import "./App.css"
import Rechart from './components/Chart';

class App extends Component {
  state = {
    itemName: "",
    itemImage: "",
    itemPrice: ""
  };

  componentDidMount() {
    this.loadItems();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert('button clicked')
    if (this.state.itemName && this.state.imageUrl && this.state.price) {
      API.saveItem({
        itemName: this.state.itemName,
        imageUrl: this.state.imageUrl,
        price: this.state.price
      })
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };

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
                  <WishlistInput
                    item={this.state.itemName}
                    image={this.state.itemImage}
                    price={this.state.itemPrice}
                    onChange={this.handleInputChange}
                    onClick={this.handleFormSubmit}
                  />
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
