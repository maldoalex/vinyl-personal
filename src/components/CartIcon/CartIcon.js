// import React from "react";
// import { connect } from "react-redux";
// import { toggleCartHidden } from "../../redux/Cart/cart.actions";
// // import { selectCartItemsCount } from "../../redux/cart-selectors";
// import "./CartIcon.scss";

// const CartIcon = ({ toggleCartHidden, cartCount }) => (
//   <div className="cart-icon" onClick={toggleCartHidden}>
//     <img
//       className="shopping-icon"
//       src="https://cdn.pixabay.com/photo/2017/11/06/15/52/blank-vinyl-record-jacket-2924018_960_720.jpg"
//       alt="record sleeve"
//     />
//     <span className="cart-count">{cartCount}</span>
//   </div>
// );

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartCount: cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
// });

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(CartIcon);

import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/Cart/cart.actions";
// import { selectCartItemsCount } from "../../redux/cart-selectors";
import "./CartIcon.scss";

const CartIcon = ({ toggleCartHidden, cartCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <img
      className="shopping-icon"
      src="https://cdn.pixabay.com/photo/2017/11/06/15/52/blank-vinyl-record-jacket-2924018_960_720.jpg"
      alt="record sleeve"
    />
    <span className="cart-count">{cartCount}</span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartCount: cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
