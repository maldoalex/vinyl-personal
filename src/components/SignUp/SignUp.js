import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import axios from "axios";
import "./SignUp.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      display_name: "",
      email: "",
      password: ""
    };
  }

  register() {
    const { first_name, last_name, display_name, email, password } = this.state;
    axios
      .post("/auth/register", {
        first_name,
        last_name,
        display_name,
        email,
        password
      })
      .then(() => {
        this.setState({
          first_name: "",
          last_name: "",
          display_name: "",
          email: "",
          password: ""
        });
      })
      .catch(err => {
        this.setState({
          first_name: "",
          last_name: "",
          display_name: "",
          email: "",
          password: ""
        });
        alert("error");
        console.log(err);
      });
  }

  // handleSubmit = async event => {
  //   event.preventDefault();

  //   const { password, confirmPassword } = this.state;

  //   if (password !== confirmPassword) {
  //     alert("passwords don't match");
  //     return;
  //   }
  // };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { first_name, last_name, display_name, email, password } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Create an account</h2>
        <span>Please fill out form</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <input
            placeholder="First Name"
            name="firstName"
            type="text"
            onChange={e => this.handleChange}
            value={first_name}
          />
          <input
            placeholder="Last Name"
            name="lastName"
            type="text"
            onChange={e => this.handlChange}
            value={last_name}
          />
          <input
            type="text"
            name="displayName"
            placeholder="user name"
            value={display_name}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
          />
          {/* <input
            type="password"
            name="confirm password"
            placeholder="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
          /> */}
          <CustomButton type="submit">Register</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
