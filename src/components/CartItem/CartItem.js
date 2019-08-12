// import React from "react";

// import "./CartProduct.scss";

// const CartProduct = ({
//   product: { product_image, id, product_name, quantity }
// }) => (
//   <div className="cart-item">
//     {" "}
//     <img src={product_image} alt="item" />{" "}
//     <div className="item-details">
//       {" "}
//       <span className="name"> {product_name}</span>{" "}
//       <span className="price">
//         {" "}
//         {quantity}x $ {id}
//       </span>{" "}
//     </div>{" "}
//   </div>
// );

// export default CartProduct;

import React from "react";

import "./CartItem.scss";

const CartItem = ({ item: { product_image, id, product_name, quantity } }) => (
  <div className="cart-item">
    <img src={product_image} alt="item" />
    <div className="item-details">
      <span className="name">{product_name}</span>
      <span className="price">
        {quantity} x ${id}
      </span>
    </div>
  </div>
);

export default CartItem;
