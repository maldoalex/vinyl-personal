import React from "react";

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { loggedIn: false };
  }

  handleLoginClick() {
    this.setState({ loggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ loggedIn: false });
  }

  render() {
    const loggedIn = this.state.loggedIn;
    let button;

    if (loggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting loggedIn={loggedIn} />
        {button}
      </div>
    );
  }
}

export default LoginControl;
