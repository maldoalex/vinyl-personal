import React from "react";
import axios from "axios";
import CustomButton from "../CustomButton/CustomButton";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { userLoggedIn } from "../../redux/user/userReducer";

import "./LogIn.scss";

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      authenticated: false
    };
    this.login = this.login.bind(this);
  }

  //use axios to get data from users table
  async login(e) {
    const { email, password } = this.state;
    const res = await axios
      .post("/auth/login", { email, password })
      .catch(err => console.log(err));
    //check for true/false and store in redux
    if (res.data.loggedIn) this.setState({ authenticated: true });
    this.props.userLoggedIn(res.data.loggedIn);
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
    if (this.props.loggedIn === true) {
      return <Redirect to="/" />;
    }
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

const mapStateToProps = reduxState => {
  return { loggedIn: reduxState.user.loggedIn };
};

export default connect(
  mapStateToProps,
  { userLoggedIn }
)(LogIn);
