import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../../redux/Cart/cart.actions";

import "./CheckoutItem.scss";

const CheckoutItem = ({ cartItem, removeItem }) => {
  const { product_name, product_image, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={product_image} alt="item" />
      </div>
      <span className="name">{product_name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
