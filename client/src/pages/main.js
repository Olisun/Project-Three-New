import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import BudgetInput from '../components/BudgetInputForm'
import WishlistInput from '../components/WishlistInputForm';
import API from '../utils/API-wishlist';
import budgetAPI from '../utils/API-budget';
import Rechart from '../components/Chart';
import DeleteBtn from '../components/DeleteButton';
import BuyBtn from '../components/BuyButton';
import { List, ListItem } from '../components/Wishlist';


class Main extends Component {
  state = {
    wishlist: [],
    boughtWishlist: [],
    notBoughtWishlist: [],
    itemName: "",
    itemImage: "",
    itemPrice: "",
    monthlyIncome: "",
    rentOrMortgage: "",
    utilities: "",
    food: "",
    transportation: "",
    misc: "",
    totalExpenses: "",
    allowance: ""
  };

  componentDidMount() {
    this.loadItems();
  }

  loadItems = () => {
    API.getItems()
      .then(res => {
        let boughtWishlist = res.data.filter(item => item.bought === true)
        let notBoughtWishlist = res.data.filter(item => item.bought === false)
        console.log(boughtWishlist);
        console.log(notBoughtWishlist);
        this.setState({ boughtWishlist: boughtWishlist, notBoughtWishlist: notBoughtWishlist, wishlist: res.data, itemName: "", itemImage: "", itemPrice: "" })
      }
      )

      .catch(err => console.log(err));
  }

  calculateAllowance = () => {
    let totalExpenses = (this.state.rentOrMortgage + this.state.utilities + this.state.food + this.state.transportation + this.state.misc);
    let allowance = (this.state.monthlyIncome - totalExpenses);
    this.setState({totalExpenses: totalExpenses, allowance: allowance})
  }

  deleteItem = id => {
    API.deleteItem(id)
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };

  updateItem = id => {
    API.updateItem(id)
      .then(res => this.loadItems())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.itemName && this.state.itemImage && this.state.itemPrice) {
      console.log(this.state.wishlist)
      API.saveItem({
        name: this.state.itemName,
        image: this.state.itemImage,
        price: this.state.itemPrice
      })
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };

  handleFormSubmitBudget = event => {
    event.preventDefault();
    if (this.state.monthlyIncome) {
      budgetAPI.saveBudget({
        Income: this.state.monthlyIncome,
        Rent: this.state.rentOrMortgage,
        Utilities: this.state.utilities,
        Food: this.state.food,
        Transportation: this.state.transportation,
        Misc: this.state.misc
      })
        .then(res => this.calculateAllowance())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <div className="container">
        <Row>
          <Col sm={8}>
            <Row>
              <Col sm={6}>
                <BudgetInput
                  income={this.state.monthlyIncome}
                  rent={this.state.rentOrMortgage}
                  util={this.state.utilities}
                  groceries={this.state.food}
                  travel={this.state.transportation}
                  miscellaneous={this.state.misc}
                  onChange={this.handleInputChange}
                  onClick={this.handleFormSubmitBudget}
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
                  {this.state.notBoughtWishlist.length ? (
                    <List>
                      {this.state.notBoughtWishlist.map(item => (
                        <ListItem key={item.id}>
                          <p>
                            {item.name}
                            <br />
                            {item.image}
                            <br />
                            {item.price}
                          </p>
                          <DeleteBtn onClick={() => this.deleteItem(item.id)} />
                          <BuyBtn onClick={() => this.updateItem(item.id)} />
                        </ListItem>
                      ))}
                    </List>
                  ) : (<h3>Start adding items!</h3>
                    )}
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={4}>
            <div className="test">
              <h3>Bought Items</h3>
              {this.state.boughtWishlist.length ? (
                <List>
                  {this.state.boughtWishlist.map(item => (
                    <ListItem key={item.id}>
                      <p>
                        {item.name}
                        <br />
                        {item.image}
                        <br />
                        {item.price}
                      </p>
                    </ListItem>
                  ))}
                </List>
              ) : (<h3>No items bought yet!</h3>
                )}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Main;
