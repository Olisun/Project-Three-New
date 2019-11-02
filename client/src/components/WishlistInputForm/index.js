import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./style.css"

class WishlistInput extends Component {
  state = {
    itemName: "",
    imageUrl: "",
    price: ""
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
      this.loadItems({
        itemName: this.state.itemName,
        imageUrl: this.state.imageUrl,
        price: this.state.price
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
              <Input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleInputChange} id="imageUrl" placeholder="" />
            </Col>
           </FormGroup>

          <FormGroup row>
            <Label for="price" sm={4}>Price:</Label>
              <Col sm={6}>
                <Input type="number" name="price" value={this.state.price} onChange={this.handleInputChange} id="price" placeholder="" />
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
