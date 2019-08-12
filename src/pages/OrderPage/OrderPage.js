import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/Cart/cart.selectors";
import StripeBtn from "../../components/StripeBtn/StripeBtn";
import "./OrderPage.scss";

const OrderPage = ({ cartItems, total }) => (
  <div className="order-page">
    <div className="header-wrapper">
      <div className="header-">
        <span>Product</span>
      </div>
      <div className="header-title">
        <span>Name</span>
      </div>
      <div className="header-title">
        <span>Quantity</span>
      </div>
      <div className="header-title">
        <span>Price</span>
      </div>
      <div className="header-title">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: ${total}</div>
    {/* <div className="test-warning">
      <p>4242 4242 4242 4242 - Exp: 01/20 - CVV: 123</p>
    </div> */}
    <StripeBtn price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(OrderPage);
// export default OrderPage;

// import React from "react";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
// import {
//   selectCartItems,
//   selectCartTotal
// } from "../../redux/Cart/cart.selectors";
// import "./OrderPage.scss";

// const OrderPage = ({ cartItems, total }) => (
//   <div className="order-page">
//     <div className="order-header">
//       <div className="header-block">
//         <span>Product</span>
//       </div>
//       <div className="header-block">
//         <span>Name</span>
//       </div>
//       <div className="header-block">
//         <span>Quantity</span>
//       </div>
//       <div className="header-block">
//         <span>Price</span>
//       </div>
//       <div className="header-block">
//         <span>Remove</span>
//       </div>
//     </div>
//     {cartItems.map(cartItem => (
//       <CheckoutItem key={cartItem.id} cartItem={cartItem} />
//     ))}
//     <div className="total">TOTAL: ${total}</div>
//   </div>
// );

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   total: selectCartTotal
// });

// export default connect(mapStateToProps)(OrderPage);
// // export default OrderPage;
