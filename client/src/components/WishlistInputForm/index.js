import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./style.css"

function WishlistInput(props) {

    return (
      <div className="test">
        <Form>
          <h3 id="formLabel">Wishlist Input Form</h3>
          <FormGroup row>
          <Label for="itemName" sm={4}>Item Name:</Label>
            <Col sm={6}>
              <Input type="text" name="itemName" value={props.item} onChange={props.onChange} id="itemName" placeholder="" />
            </Col>
          </FormGroup>

          <FormGroup row>
          <Label for="imageUrl" sm={4}>Image Link:</Label>
            <Col sm={6}>
              <Input type="text" name="itemImage" value={props.image} onChange={props.onChange} id="itemImage" placeholder="" />
          </Col>
           </FormGroup>

          <FormGroup row>
          <Label for="price" sm={4}>Price:</Label>
            <Col sm={6}>
              <Input type="number" name="itemPrice" value={props.price} onChange={props.onChange} id="itemPrice" placeholder="" />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 20, offset: 6 }}>
              <Button
              disabled={!(props.item && props.image && props.price)} 
              onClick={props.onClick}>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }


export default WishlistInput;