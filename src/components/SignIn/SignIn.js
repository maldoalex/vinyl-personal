import React from "react";
import axios from "axios";
import CustomButton from "../CustomButton/CustomButton";

import "./SignIn.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  signIn() {
    const { email, password } = this.state;
    axios
      .post("/auth/login", { email, password })
      .then(() => {
        this.setState({ email: "", password: "" });
      })
      .catch(err => alert(err.response.request.response));
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Account Holders</h2>
        <span>Sign in with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name="email"
            placeholder="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
          />
          <input
            name="password"
            placeholder="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
          />
          <CustomButton type="submit"> Sign in </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
