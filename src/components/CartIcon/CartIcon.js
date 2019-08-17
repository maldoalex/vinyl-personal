import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/Cart/cartReducer";
// import { selectCartItemsCount } from "../../redux/cart-selectors";
import "./CartIcon.scss";

const CartIcon = ({ toggleCartHidden, cartCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <img
      className="crate-icon"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHEW2Sz1Ykcx2JubMgROs7tmrSQh7uvgmpbTM8OsXGW7eOgqNn"
      alt="record sleeve"
    />
    <span className="cart-count">{cartCount}</span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  // cartCount: cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
