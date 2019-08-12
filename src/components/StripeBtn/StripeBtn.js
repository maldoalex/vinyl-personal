import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeBtn = ({ price }) => {
  const priceToCents = price * 100;
  const key = "pk_test_gAkv7yjUhrAWISKr9Js16Qbm00JUW1OxCd";

  const handleToken = token => {
    console.log(token);
    alert("Payment Successful");
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
