import React from "react";
import { connect } from "react-redux";
// import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import CartItem from "../../components/CartItem/CartItem";
import StripeBtn from "../../components/StripeBtn/StripeBtn";

import "./OrderPage.scss";

const OrderPage = ({ cartItems, total, userID }) => {
  let stripeTotal = cartItems.reduce((total, cartItem) => {
    console.log(cartItem);
    return (total += Number(cartItem.product_price || 1));
  }, 0);
  return (
    <div className="order-page">
      <div className="order-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Name</span>
        </div>
        {/* <div className="header-block">
          <span>Quantity</span>
        </div> */}
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="total">TOTAL: $ {stripeTotal}</div>
      {console.log(total)}
      <StripeBtn price={stripeTotal} cartItems={cartItems} userID={userID} />
    </div>
  );
};
// {cartItems.reduce((total, cartItem) => total + Number(cartItem.price),0)}

const mapStateToProps = reduxState => {
  return { cartItems: reduxState.cart.cartItems, userID: reduxState.user.id };
};

export default connect(mapStateToProps)(OrderPage);
