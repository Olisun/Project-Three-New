import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./style.css"
import API from '../../utils/API-wishlist.js'

class WishlistInput extends Component {
  
  state = {
    itemName: "",
    itemImage: "",
    itemPrice: ""
  };

  loadItems = () => {

  }

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
        price: this.state.itemPrice
      })
        .then(res => this.loadItems())
        .catch(err => console.log(err));
    }
  };
  render () {
    return (
      <div className="test">
        <Form>
          <h3 id="formLabel">Wishlist Input Form</h3>
          <FormGroup row>
          <Label for="itemName" sm={4}>Item Name:</Label>
            <Col sm={6}>
              <Input type="text" name="itemName" value={this.state.itemName} onChange={this.handleInputChange} id="itemName" placeholder="" />
            </Col>
          </FormGroup>

          <FormGroup row>
          <Label for="imageUrl" sm={4}>Image Link:</Label>
            <Col sm={6}>
              <Input type="text" name="itemImage" value={this.state.itemImage} onChange={this.handleInputChange} id="itemImage" placeholder="" />
          </Col>
           </FormGroup>

          <FormGroup row>
          <Label for="price" sm={4}>Price:</Label>
            <Col sm={6}>
              <Input type="number" name="itemPrice" value={this.state.itemPrice} onChange={this.handleInputChange} id="itemPrice" placeholder="" />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 20, offset: 6 }}>
              <Button onClick={this.handleFormSubmit}>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default WishlistInput;