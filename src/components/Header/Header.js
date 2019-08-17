import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartSlide from "../CartSlide/CartSlide";
import axios from "axios";
import { userLoggedIn, userLoggedOut } from "../../redux/user/userReducer";

import "./Header.scss";

// const Header = props => (
class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  async componentDidMount() {
    let res = await axios.get("/auth/user");
    // console.log(res);
    if (res.data.loggedIn) this.setState({ authenticated: true });
    this.props.userLoggedIn(res.data.loggedIn);
  }

  logout = () => {
    // console.log("hit");
    axios
      .get("/auth/logout")
      .then(res => {
        this.props.userLoggedOut();
        // console.log(res);
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
              Logout
            </div>
          ) : (
            <Link className="option" to="/login">
              {/* <Logout /> */}
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
