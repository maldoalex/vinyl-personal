import React from "react";
import { connect } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import StripeBtn from "../../components/StripeBtn/StripeBtn";

import "./OrderPage.scss";

const OrderPage = ({ cartItems, total, userID, mbID }) => {
  console.log(cartItems);
  let stripeTotal = cartItems.reduce((total, cartItem) => {
    console.log(cartItem);
    return (total += Number(cartItem.product_price || 1));
  }, 0);
  return (
    <div className="order-page">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
      <div className="total">TOTAL: $ {stripeTotal}</div>
      {console.log(total)}
      <StripeBtn
        price={stripeTotal}
        cartItems={cartItems}
        userID={userID}
        mbID={mbID}
      />
    </div>
  );
};

const mapStateToProps = reduxState => {
  return { cartItems: reduxState.cart.cartItems, userID: reduxState.user.id };
};

export default connect(mapStateToProps)(OrderPage);
