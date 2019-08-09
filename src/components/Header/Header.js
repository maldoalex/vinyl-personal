import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img
        src="https://images.vexels.com/media/users/3/158737/isolated/preview/3353b3a06bc810221952cccbbb189b47-record-rarity-vinyl-illustration-by-vexels.png"
        alt="vinyl record"
      />
    </Link>
    <div className="navs">
      <Link className="nav" to="/shop">
        SHOP
      </Link>
      <Link className="nav" to="/shop">
        CONTACT
      </Link>
      {/* {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : ( */}
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
      {/* )} */}
    </div>
  </div>
);

export default Header;
