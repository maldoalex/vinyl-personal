import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import axios from "axios";
import "./Register.scss";

class Register extends React.Component {
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

  //use axios to place data in users table in respective columns
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

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  //use key 'name' to set state for respective key
  render() {
    const { first_name, last_name, display_name, email, password } = this.state;
    return (
      <div className="register">
        <h2 className="title">Create an account</h2>
        <span>Please fill out form</span>
        <form className="register-form" onSubmit={this.handleSubmit}>
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

          <CustomButton type="submit">Register</CustomButton>
        </form>
      </div>
    );
  }
}

export default Register;
