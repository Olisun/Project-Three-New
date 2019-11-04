import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import BudgetInput from '../components/BudgetInputForm'
import WishlistInput from '../components/WishlistInputForm';
import API from '../utils/API-wishlist'
import Rechart from '../components/Chart';

class Main extends Component {
  state = {
    itemName: "",
    itemImage: "",
    itemPrice: "",

    monthlyIncome: "",
    rentOrMortgage: "",
    utilities: "",
    food: "",
    transportation: "",
    misc: ""
  };

  // componentDidMount() {
  //   this.loadItems();
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.itemName)
    if (this.state.itemName && this.state.imageUrl && this.state.price) {
      API.saveItem({
        itemName: this.state.itemName,
        imageUrl: this.state.imageUrl,
        price: this.state.price
      })
        .then(res => this.setState({itemName: "", itemImage: "", itemPrice: ""}))
        .catch(err => console.log(err));
    }
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

  // handleFormSubmit2 = event => {
  //   event.preventDefault();
  //   alert('button clicked')
  //   if (this.state.monthlyIncome) {
  //     // API.saveBudget({
        
  //     // })
  //       .then(res => this.loadItems())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
        <div className="container">
          <Row>
            <Col sm={8}>
              <Row>
                <Col sm={6}>
                  <BudgetInput
                  income = {this.state.monthlyIncome}
                  rent = {this.state.rentOrMortgage}
                  util = {this.state.utilities}
                  groceries = {this.state.food}
                  travel = {this.state.transportation}
                  miscellaneous = {this.state.misc}
                  onChange={this.handleInputChange}
                  />
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
    );
  }
}

export default Main;
