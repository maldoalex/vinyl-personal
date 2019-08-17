import React from "react";
import axios from "axios";
// import CustomButton from "../CustomButton/CustomButton";

class LogOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  logout = () => {
    console.log("hit");
    axios
      .get("/auth/logout")
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.logout();
  };

  render() {
    return (
      <div className="logout">
        <button type="submit" onClick={this.handleSubmit}>
          LOGOUT
        </button>
      </div>
    );
  }
}

export default LogOut;
