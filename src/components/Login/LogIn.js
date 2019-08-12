import React from "react";
import axios from "axios";
import CustomButton from "../CustomButton/CustomButton";

import "./LogIn.scss";

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    this.login = this.login.bind(this);
  }

  //use axios to get data from users table
  login() {
    const { email, password } = this.state;
    console.log("hit");
    axios
      .post("/auth/login", { email, password })
      .then(() => {
        console.log("logged in");
        this.setState({ email: "", password: "" });
      })
      .catch(err => alert(err.response.request.response));
  }

  handleSubmit = event => {
    event.preventDefault();
    this.login();
    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  //use form to capture input and set state on submit
  render() {
    return (
      <div className="login">
        <h2>Account Holders</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            placeholder="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            name="password"
            placeholder="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <CustomButton onClick={this.handleSubmit} type="submit">
            {" "}
            Log in{" "}
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default LogIn;
