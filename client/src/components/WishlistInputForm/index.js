import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const WishlistInput = (props) => {
  return (
    <div className="container">
      <Form>
        <h3>Wishlist Input Form</h3>
        <FormGroup row>
         <Label for="itemName" sm={2}>Item Name:</Label>
         <Col sm={3}>
           <Input type="text" name="itemName" id="itemName" placeholder="" />
         </Col>
        </FormGroup>

       <FormGroup row>
         <Label for="imageUrl" sm={2}>Image Link:</Label>
         <Col sm={3}>
           <Input type="text" name="imageUrl" id="imageUrl" placeholder="" />
         </Col>
       </FormGroup>

       <FormGroup row>
          <Label for="price" sm={2}>Price:</Label>
          <Col sm={3}>
           <Input type="number" name="price" id="price" placeholder="" />
         </Col>
       </FormGroup>

       <FormGroup row>
        <Label for="bought" sm={2}>Purchased:</Label>
        <Col sm={3}>
          <Input type="select" name="bought" id="bought">
            <option>Yes</option>
            <option>No</option>
          </Input>
        </Col>
      </FormGroup>

        <FormGroup check row>
         <Col sm={{ size: 20, offset: 2 }}>
           <Button>Submit</Button>
         </Col>
        </FormGroup>

     </Form>
    </div>
  );
}

export default WishlistInput;
