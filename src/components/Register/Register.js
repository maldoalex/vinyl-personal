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
    this.register = this.register.bind(this);
  }

  //use axios to place data in users table in respective columns
  register() {
    const { first_name, last_name, display_name, email, password } = this.state;
    console.log("hit");
    axios
      .post("/auth/register", {
        first_name,
        last_name,
        display_name,
        email,
        password
      })
      .then(() => {
        console.log("registered");
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

  handleSubmit = event => {
    event.preventDefault();
    this.register();
    this.setState({
      first_name: "",
      last_name: "",
      display_name: "",
      email: "",
      password: ""
    });
  };

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
            name="first_name"
            type="text"
            value={first_name}
            onChange={this.handleChange}
          />
          <input
            placeholder="Last Name"
            name="last_name"
            type="text"
            value={last_name}
            onChange={this.handlChange}
          />
          <input
            type="text"
            name="display_name"
            placeholder="display name"
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
