import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./style.css"
import Animate from 'animate.css-react' 
import 'animate.css/animate.css' 

function Login(props) {
  return (
    <div className="container2">
      <Row>
        <Col sm={10}>
          <h1 id="formLabel2" className="animated slideInLeft delay-1s">Can I Buy This?</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Form className="animated zoomIn">
          <h3 id="formLabel">Current Users</h3>
            <FormGroup row>
            <Label for="userName" sm={3}>Username:</Label>
              <Col sm={5}>
                <Input type="text" name="userName" value={props.currentUser} onChange={props.onChange}  id="userName" placeholder="Username" />
              </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="password" sm={3}>Password:</Label>
              <Col sm={5}>
                <Input type="password" name="password" value={props.currentPw} onChange={props.onChange}  id="password" placeholder="Password" />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 20, offset: 3 }}>
                <Button
                  disabled={!(props.currentUser && props.currentPw)} 
                  onClick={props.onClick}>Submit 
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
        <Col sm={6}>
          <Form className="animated zoomIn">
          <h3 id="formLabel">New Users</h3>
            <FormGroup row>
              <Label for="newUser" sm={4}>Create Username:</Label>
              <Col sm={5}>
               <Input type="text" name="newUser" value={props.newUser} onChange={props.onChange}  id="newUser" placeholder="Username" />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="createPassword" sm={4}>Password:</Label>
              <Col sm={5}>
                <Input type="createPassword" name="createPassword" value={props.newPw} onChange={props.onChange}  id="createPassword" placeholder="Create Password" />
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 20, offset: 4 }}>
                <Button
                  disabled={!(props.newUser&& props.image && props.newPw)} 
                  onClick={props.onClick}>Submit 
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Login;