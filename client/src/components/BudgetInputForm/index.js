import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./style.css"

function BudgetInput(props) {

    return (
      <div className="test">
        <Form>
          <h3 id="formLabel">Budget Input Form</h3>
          <FormGroup row>
          <Label for="monthlyIncome" id="monthlyIncome" sm={5}>Monthly Income:</Label>
            <Col sm={5}>
             <Input type="number" name="monthlyIncome" value={props.income} onChange={props.onChange} id="monthlyIncome" placeholder="" />
           </Col>
          </FormGroup>

          <FormGroup row>
          <Label for="rentMortgage" className="label" sm={5}>Rent/Mortgage:</Label>
            <Col sm={5}>
             <Input type="number" name="rentOrMortgage" value={props.rent} onChange={props.onChange} id="rentOrMortgage" placeholder="" />
            </Col>
          </FormGroup>

          <FormGroup row>
          <Label for="utilities" className="label" sm={5}>Utilities:</Label>
            <Col sm={5}>
             <Input type="number" name="utilities" value={props.util} onChange={props.onChange} id="utilities" placeholder="" />
             </Col>
          </FormGroup>

          <FormGroup row>
          <Label for="food" className="label" sm={5}>Groceries/Food:</Label>
            <Col sm={5}>
              <Input type="number" name="food" value={props.groceries} onChange={props.onChange} id="food" placeholder="" />
            </Col>
          </FormGroup>

          <FormGroup row>
          <Label for="transportation" className="label" sm={5}>Transportation:</Label>
            <Col sm={5}>
              <Input type="number" name="transportation" value={props.travel} onChange={props.onChange} id="transportation" placeholder="" />
            </Col>
          </FormGroup>

          <FormGroup row>
          <Label for="misc" className="label" sm={5}>Misc. Expenses:</Label>
            <Col sm={5}>
             <Input type="number" name="misc" value={props.miscellaneous} onChange={props.onChange} id="misc" placeholder="" />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 20, offset: 6 }}>
              <Button onClick={props.updateBudget}>Update</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }


export default BudgetInput;
