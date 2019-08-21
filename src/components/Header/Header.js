import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartSlide from "../CartSlide/CartSlide";
import axios from "axios";
import { userLoggedIn, userLoggedOut } from "../../redux/user/userReducer";

import "./Header.scss";

class Header extends React.Component {
  async componentDidMount() {
    let res = await axios.get("/auth/user");
    if (res.data.loggedIn) this.setState({ authenticated: true });
    this.props.userLoggedIn(res.data.loggedIn);
  }

  logout = () => {
    axios
      .get("/auth/logout")
      .then(res => {
        this.props.userLoggedOut();
      })
      .catch(err => console.log(err));
  };

  handleSubmit = event => {
    event.preventDefault();
    this.logout();
  };
  render() {
    const { hidden, loggedIn } = this.props;
    return (
      <div className="header">
        {console.log(this.props)}
        <Link className="logo-container" to="/">
          <img
            src="https://images.vexels.com/media/users/3/158737/isolated/preview/3353b3a06bc810221952cccbbb189b47-record-rarity-vinyl-illustration-by-vexels.png"
            alt="vinyl record"
          />
        </Link>
        <div className="navs">
          {loggedIn ? (
            <Link className="nav" to="/update">
              UPDATE
            </Link>
          ) : null}

          <Link className="nav" to="/email">
            EMAIL
          </Link>
          <Link className="nav" to="/catalog">
            CATALOG
          </Link>
          <Link className="nav" to="/inventory">
            RENT
          </Link>
          <Link className="nav" to="/order">
            CHECKOUT
          </Link>

          {loggedIn ? (
            <div className="nav" onClick={this.handleSubmit}>
              LOGOUT
            </div>
          ) : (
            <Link className="nav" to="/login">
              LOGIN
            </Link>
          )}
          <CartIcon />
        </div>
        {hidden ? null : <CartSlide />}
      </div>
    );
  }
}

// );

const mapStateToProps = reduxState => {
  return { hidden: reduxState.cart.hidden, loggedIn: reduxState.user.loggedIn };
};

export default connect(
  mapStateToProps,
  { userLoggedIn, userLoggedOut }
)(Header);
