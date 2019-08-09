import React from "react";
// import { connect } from "react-redux";

import "./OrderPage.scss";

const OrderPage = ({ cartItems, total }) => (
  <div className="order-page">
    <div className="order-header">
      <div className="header-block">
        <span>Item</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {/* {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))} */}
    {/* <div className="total">TOTAL: ${total}</div> */}
  </div>
);

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   total: selectCartTotal
// });

// export default connect(mapStateToProps)(OrderPage);
export default OrderPage;
