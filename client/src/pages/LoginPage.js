import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import Login from '../components/Login';


class LoginPage extends Component {
  state = {
    login: [],
    userName: "",
    password: ""
  };
  
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.userName && this.state.password) {
  //     console.log(this.state.login)
  //     API.saveItem({
  //       name: this.state.userName,
  //       image: this.state.password,
  //     })
  //     .then(res => this.loadItems())
  //     .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <div className="container2">
        <Login 
          currentUser={this.state.userName}
          currentPw={this.state.password}
          newUser={this.state.createUserName}
          newPw={this.state.createPassword}
        />
      </div>
    )
  }
}


export default LoginPage;