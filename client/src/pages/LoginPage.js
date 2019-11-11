import React, { Component } from 'react';
import Login from '../components/Login';
import API from '../utils/API-user';


class LoginPage extends Component {
  state = {
    login: [],
    userName: "",
    password: "",
  };
  
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  
  handleFormLogin = event => {
    event.preventDefault();
    if (this.state.userName && this.state.password) {
      API.getUsers()
      .then(res => {
        let users = res.data;
        this.setState({userName: this.state.userName, password: this.state.password});
        for (var i = 0; i < users.length; i++) {
          if (users[i].username === this.state.userName && users[i].password === this.state.password) {
            console.log("yes login works");
            console.log(users[i].id);
            window.location = "/main/" + users[i].id;
          }
        }
      })
      .catch(err => console.log(err));
    }
  };

  handleFormSignUp = event => {
    event.preventDefault();
    if (this.state.userName && this.state.password) {
      API.createUser({
        username: this.state.userName,
        password: this.state.password,
      })
        .then(res => 
          this.setState({
          userName:"",
          password:""
        }))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="container2">
        <Login 
          currentUser={this.state.userName}
          currentPw={this.state.password}
          onChange={this.handleInputChange}
          signUp={this.handleFormSignUp}
          login={this.handleFormLogin}
        />
      </div>
    )
  }
}


export default LoginPage;