import React from "react";
import StripeCheckout from "react-stripe-checkout";
import orderReducer from "../../redux/Order/orderReducer";
import axios from "axios";

const StripeBtn = ({ price }) => {
  const priceToCents = price * 100;
  const key = "pk_test_gAkv7yjUhrAWISKr9Js16Qbm00JUW1OxCd";

  const handleToken = token => {
    console.log(token);
    axios
      .post("/api/charge", {
        orderToken: token.id
        //striptot
      })
      .then(res => {
        alert("success");
        //axios req
        axios.post("/api/order", {
          // body.users_id,
          // hardware_id
          //stripetotal
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
