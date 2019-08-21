import React from "react";
import StripeCheckout from "react-stripe-checkout";
// import orderReducer from "../../redux/Order/orderReducer";
import axios from "axios";

const StripeBtn = ({ price, cartItems, userID, mbID }) => {
  const priceToCents = price * 100;
  const key = "pk_test_gAkv7yjUhrAWISKr9Js16Qbm00JUW1OxCd";
  console.log(userID);
  const handleToken = token => {
    // console.log(token);
    axios
      .post("/api/charge", {
        orderToken: token.id
      })
      .then(res => {
        alert("success");
        let idArray = cartItems.map(item => {
          return item.id;
        });
        console.log(idArray);
        axios.post("/api/order", {
          hardware_id: idArray.join(","),
          user_id: userID,
          mb_id: mbID
        });
      })
      .catch(err => alert("payment unsuccessful"));
  };

  return (
    <StripeCheckout
      label="Complete Order"
      name="VinylSide"
      billingAddress
      shippingAddress
      description={`The total is $${price}`}
      amount={priceToCents}
      token={handleToken}
      stripeKey={key}
    />
  );
};

export default StripeBtn;
