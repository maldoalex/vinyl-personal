import React from "react";

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
            label="email"
            required
          />
          <input
            name="password"
            placeholder="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <CustomButton type="submit"> Sign in </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
