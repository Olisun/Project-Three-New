import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./style.css"

const BudgetInput = (props) => {
  return (
    <div className="test">
      <Form>
        <h3 id="formLabel">Budget Input Form</h3>
        <FormGroup row>
         <Label for="monthlyIncome" id="incomeLabel" sm={5}>Monthly Income:</Label>
         <Col sm={5}>
           <Input type="number" name="monthlyIncome" id="monthlyIncome" placeholder="" />
         </Col>
        </FormGroup>

       <FormGroup row>
         <Label for="rentMortgage" className="label" sm={5}>Rent/Mortgage:</Label>
         <Col sm={5}>
           <Input type="number" name="rentMortgage" id="rentMortgage" placeholder="" />
         </Col>
       </FormGroup>

       <FormGroup row>
          <Label for="utilities" className="label" sm={5}>Utilities:</Label>
          <Col sm={5}>
           <Input type="number" name="utilities" id="utilities" placeholder="" />
         </Col>
       </FormGroup>

       <FormGroup row>
          <Label for="food" className="label" sm={5}>Groceries/Food:</Label>
          <Col sm={5}>
            <Input type="number" name="food" id="food" placeholder="" />
          </Col>
       </FormGroup>

       <FormGroup row>
          <Label for="transportation" className="label" sm={5}>Transportation:</Label>
          <Col sm={5}>
            <Input type="number" name="transportation" id="transportation" placeholder="" />
          </Col>
       </FormGroup>

       <FormGroup row>
         <Label for="misc" className="label" sm={5}>Misc. Expenses:</Label>
         <Col sm={5}>
           <Input type="number" name="misc" id="misc" placeholder="" />
          </Col>
        </FormGroup>

        <FormGroup check row>
         <Col sm={{ size: 20, offset: 6 }}>
           <Button>Submit</Button>
         </Col>
        </FormGroup>

     </Form>
    </div>
  );
}

export default BudgetInput;
