import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { updateAuth, login, register } from "../../redux/user/userReducer";

class Auth extends Component {
  handleChange = event => {
    this.props.updateAuth(event.target.name, event.target.value);
  };
  handleLogin = event => {
    this.props.login(this.props.email, this.props.password);
  };
  handleRegister = event => {
    this.props.register(this.props.display_name, this.props.password);
  };

  render() {
    if (this.props.error === "register") {
      alert("Username already taken");
    } else if (this.props.error === "login") {
      alert("incorrect username or password");
    }
    console.log(this.props);
    return (
      <>
        {this.props.id ? <Redirect to="/" /> : null}
        <h1>Welcome</h1>
        <label>
          email
          <input
            onChange={this.handleChange}
            name="email"
            placeholder="email"
          />
        </label>
        <label>
          password
          <input
            onChange={this.handleChange}
            name="password"
            placeholder="password"
          />
        </label>

        <button>Cancel</button>
        <button onClick={this.handleRegister}>Register</button>
        <button onClick={this.handleLogin}>Login</button>
      </>
    );
  }
}

let mapStatetoProps = reduxState => {
  return {
    display_name: reduxState.auth.display_name,
    password: reduxState.auth.password,
    id: reduxState.auth.id,
    error: reduxState.auth.error
  };
};

export default connect(
  mapStatetoProps,
  { updateAuth, login, register }
)(Auth);
