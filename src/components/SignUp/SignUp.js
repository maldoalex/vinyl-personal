import React from "react";
import CustomButton from "../CustomButton/CustomButton";

import "./SignUp.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
  };
  // try {
  //  const { user } = await auth.createUserWithEmailAndPassword(
  //   email,
  //   password
  //  );

  //  await createUserProfileDocument(user, { displayName });

  //   this.setState({
  //    displayName: '',
  //    email: '',
  //    password: '',
  //    confirmPassword: ''
  //   });
  //  } catch (error) {
  //   console.error(error);
  //  }
  // };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">Create an account</h2>
        <span>Please fill out form</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="displayName"
            placeholder="user name"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <input
            type="password"
            name="confirm password"
            placeholder="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">Register</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
