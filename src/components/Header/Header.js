import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CartIcon from "../CartIcon/CartIcon";
import CartSlide from "../CartSlide/CartSlide";

import "./Header.scss";

const Header = props => (
  <div className="header">
    {console.log(props)}
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
      {/* {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : ( */}
      <Link className="option" to="/login">
        LOGIN
      </Link>
      {/* )} */}
      <CartIcon />
    </div>
    {props.hidden ? null : <CartSlide />}
  </div>
);

const mapStateToProps = reduxState => {
  return { hidden: reduxState.cart.hidden };
};

export default connect(mapStateToProps)(Header);
