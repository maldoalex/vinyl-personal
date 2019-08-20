import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import axios from "axios";
import "./UpdateUser.scss";
import { connect } from "react-redux";

class UpdateUser extends React.Component {
  constructor() {
    super();

    this.state = {
      first_name: "",
      last_name: "",
      display_name: "",
      email: "",
      password: ""
    };
    this.updateUser = this.updateUser.bind(this);
  }

  //use axios to place data in users table in respective columns
  updateUser() {
    const { first_name, last_name, display_name, email } = this.state;
    console.log("hit");
    axios
      .put("/auth/update", {
        first_name,
        last_name,
        display_name,
        email
      })
      .then(() => {
        console.log("registered");
        this.setState({
          first_name: "",
          last_name: "",
          display_name: "",
          email: ""
        });
      })
      .catch(err => {
        // this.setState({
        //   first_name: "",
        //   last_name: "",
        //   display_name: "",
        //   email: "",
        //   password: ""
        // });
        alert("error");
        console.log(err);
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.updateUser();
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
    console.log(this.props);
    const { first_name, last_name, display_name, email, password } = this.state;
    return (
      <div className="register">
        <h2 className="title">Update your account</h2>
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
            onChange={this.handleChange}
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

          <CustomButton type="submit">Update</CustomButton>
        </form>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    first_name: reduxState.user.first_name,
    last_name: reduxState.user.last_name,
    display_name: reduxState.user.display_name,
    email: reduxState.user.email,
    password: reduxState.user.password
  };
};

export default connect(mapStateToProps)(UpdateUser);
