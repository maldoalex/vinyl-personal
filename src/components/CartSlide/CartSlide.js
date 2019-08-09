import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import CustomButton from "../CustomButton/CustomButton";

import "./CartSlide.scss";

//create a cart component that slides in from right when icon is clicked
//map through cart items and send to CartItem component

const CartSlide = ({ cartItems, history }) => (
  <div className="cart-slide">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton onClick={() => history.push("/order")}>
      Complete Order
    </CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default withRouter(connect(mapStateToProps)(CartSlide));
