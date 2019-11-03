// We made the components state-full rather than the pages. We are unsure if the stateful logic needs to be on the pages

import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./style.css"

class BudgetInput extends Component {
  state = {
    monthlyIncome: "",
    rentOrMortgage: "",
    utilities: "",
    food: "",
    transportation: "",
    misc: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('button clicked');
    this.setState([
      { monthlyIncome: this.state.monthlyIncome },
      { rentOrMortgage: this.state.rentOrMortgage },
      { utilities: this.state.utilities },
      { food: this.state.food },
      { transportation: this.state.transportation },
      { misc: this.state.misc },
    ])
  }

  render () {
    return (
      <div className="test">
        <Form>
          <h3 id="formLabel">Budget Input Form</h3>
          <FormGroup row>
          <Label for="monthlyIncome" id="monthlyIncome" sm={5}>Monthly Income:</Label>
            <Col sm={5}>
             <Input type="number" name="monthlyIncome" value={this.props.value} onChange={this.handleInputChange} id="monthlyIncome" placeholder="" />
           </Col>
          </FormGroup>

          <FormGroup row>
          <Label for="rentMortgage" className="label" sm={5}>Rent/Mortgage:</Label>
            <Col sm={5}>
             <Input type="number" name="rentOrMortgage" value={this.props.value} onChange={this.handleInputChange} id="rentOrMortgage" placeholder="" />
            </Col>
          </FormGroup>

          <FormGroup row>
          <Label for="utilities" className="label" sm={5}>Utilities:</Label>
            <Col sm={5}>
             <Input type="number" name="utilities" value={this.props.value} onChange={this.handleInputChange} id="utilities" placeholder="" />
             </Col>
          </FormGroup>

          <FormGroup row>
          <Label for="food" className="label" sm={5}>Groceries/Food:</Label>
            <Col sm={5}>
              <Input type="number" name="food" value={this.props.value} onChange={this.handleInputChange} id="food" placeholder="" />
            </Col>
          </FormGroup>

          <FormGroup row>
          <Label for="transportation" className="label" sm={5}>Transportation:</Label>
            <Col sm={5}>
              <Input type="number" name="transportation" value={this.props.value} onChange={this.handleInputChange} id="transportation" placeholder="" />
            </Col>
          </FormGroup>

          <FormGroup row>
          <Label for="misc" className="label" sm={5}>Misc. Expenses:</Label>
            <Col sm={5}>
             <Input type="number" name="misc" value={this.props.value} onChange={this.handleInputChange} id="misc" placeholder="" />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 20, offset: 6 }}>
              <Button onClick={this.props.handleFormSubmit}>Submit</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}


export default BudgetInput;
