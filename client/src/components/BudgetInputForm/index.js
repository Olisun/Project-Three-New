import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const BudgetInput = (props) => {
  return (
    <div className="container">
      <Form>
        <h2>Budget Input Form</h2>
        <FormGroup row>
         <Label for="monthlyIncome" sm={2}>Monthly Income:</Label>
         <Col sm={3}>
           <Input type="number" name="monthlyIncome" id="monthlyIncome" placeholder="" />
         </Col>
        </FormGroup>

       <FormGroup row>
         <Label for="rentOrMortgage" sm={2}>Rent or Mortgage:</Label>
         <Col sm={3}>
           <Input type="number" name="rentOrMortgage" id="rentOrMortgage" placeholder="" />
         </Col>
       </FormGroup>

       <FormGroup row>
          <Label for="utilities" sm={2}>Utilities:</Label>
          <Col sm={3}>
           <Input type="number" name="utilities" id="utilities" placeholder="" />
         </Col>
       </FormGroup>

       <FormGroup row>
          <Label for="food" sm={2}>Groceries and Dining:</Label>
          <Col sm={3}>
            <Input type="number" name="food" id="food" placeholder="" />
          </Col>
       </FormGroup>

       <FormGroup row>
          <Label for="transportation" sm={2}>Transportation:</Label>
          <Col sm={3}>
            <Input type="number" name="transportation" id="transportation" placeholder="" />
          </Col>
       </FormGroup>

       <FormGroup row>
         <Label for="misc" sm={2}>Misc. Expenses:</Label>
         <Col sm={3}>
           <Input type="number" name="misc" id="misc" placeholder="" />
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

export default BudgetInput;
