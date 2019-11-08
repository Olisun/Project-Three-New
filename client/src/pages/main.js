import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import BudgetInput from '../components/BudgetInputForm'
import WishlistInput from '../components/WishlistInputForm';
import API from '../utils/API-wishlist';
import budgetAPI from '../utils/API-budget';
import DeleteBtn from '../components/DeleteButton';
import BuyBtn from '../components/BuyButton';
import { List, ListItem } from '../components/Wishlist';
import Chart2 from '../components/Chart2';

class Main extends Component {
  state = {
    wishlist: [],
    boughtWishlist: [],
    notBoughtWishlist: [],
    itemName: "",
    itemImage: "",
    itemPrice: 0,
    monthlyIncome: 0,
    rentOrMortgage: 0,
    utilities: 0,
    food: 0,
    transportation: 0,
    misc: 0,
    totalExpenses: 0,
    allowance: 0
  };

  componentDidMount() {
    this.loadItems();
    this.createBudget();
  }


  createBudget = () => {
    budgetAPI.getBudget()
      .then(res => {
        let current = res.data;
        if (current.length === 0) {
          budgetAPI.saveBudget({
            Income: 0,
            Rent: 0,
            Utilities: 0,
            Food: 0,
            Transportation: 0,
            Misc: 0
          })
        }
      })
      .catch(err => console.log(err));
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
    let income = parseInt(this.state.monthlyIncome);
    let rent = parseInt(this.state.rentOrMortgage);
    let utilities = parseInt(this.state.utilities);
    let food = parseInt(this.state.food);
    let transportation = parseInt(this.state.transportation);
    let misc = parseInt(this.state.misc);

    let totalExpenses = (parseInt(this.state.rentOrMortgage) + parseInt(this.state.utilities) + parseInt(this.state.food) + parseInt(this.state.transportation) + parseInt(this.state.misc));
    let allowance = (parseInt(this.state.monthlyIncome) - parseInt(totalExpenses));
    this.setState({ totalExpenses: totalExpenses, allowance: allowance, monthlyIncome: income, rentOrMortgage: rent, utilities: utilities, transportation: transportation, food: food, misc: misc })
    console.log(this.state.totalExpenses);
    console.log(this.state.allowance);
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

  updateBudget = id => {
    budgetAPI.updateBudget(id)
      .then(res => this.calculateAllowance())
      // ^^ eventually this.loadChart()
      .catch(err => console.log(err))
  }

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

  handleFormSubmitUpdate = event => {
    event.preventDefault();
    if (this.state.monthlyIncome) {
      budgetAPI.updateBudget(
        {
          id: 1,
          Income: this.state.monthlyIncome,
          Rent: this.state.rentOrMortgage,
          Utilities: this.state.utilities,
          Food: this.state.food,
          Transportation: this.state.transportation,
          Misc: this.state.misc
        }

      )
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
                  updateBudget={this.handleFormSubmitUpdate}
                />
              </Col>
              <Col sm={6}>
                <div className="test">
                  <Chart2
                    rent={this.state.rentOrMortgage}
                    util={this.state.utilities}
                    groceries={this.state.food}
                    travel={this.state.transportation}
                    miscellaneous={this.state.misc}
                    income={this.state.monthlyIncome}
                    expenses={this.state.totalExpenses}
                    allowance={this.state.allowance}
                  />
                </div>
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
                            <div className="img-container">
                              <img height="100px" width="100px" alt={item.name} src={item.image}></img>
                            </div>
                            <br />
                            {item.name}
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
                        <div className="img-container">
                          <img height="100px" width="100px" alt={item.name} src={item.image}></img>
                        </div>
                        <br />
                        {item.name}
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

