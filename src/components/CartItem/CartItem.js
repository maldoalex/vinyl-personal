import React from "react";
import { removeItem } from "../../redux/Cart/cartReducer";
import { connect } from "react-redux";

import "./CartItem.scss";

const CartItem = props => {
  //vinyl cart items
  console.log(props);
  if (props.item.artist) {
    return (
      <div className="cart-item">
        <img src={props.item.image[2][`#text`]} alt="item" />
        <div className="item-details">
          <span className="name">{props.item.name}</span>
          <span className="price">1</span>
        </div>
        <div
          className="remove-button"
          onClick={() => props.removeItem(props.item.name)}
        >
          &#10005;
        </div>
      </div>
    );
  } else {
    //turntable cart items
    return (
      <div className="cart-item">
        <img src={props.item.product_image} alt="item" />
        <div className="item-details">
          <span className="name">{props.item.product_name}</span>
          <span className="price">{props.item.product_price}</span>
        </div>
        <div
          className="remove-button"
          onClick={() => props.removeItem(props.item.id)}
        >
          &#10005;
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CartItem);
