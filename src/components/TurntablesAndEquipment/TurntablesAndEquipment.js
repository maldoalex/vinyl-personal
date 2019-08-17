import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/Cart/cartReducer";
import "./TurntablesAndEquipment.scss";

// component that structures the display of each turntable using the columns from hardware table
const TurntablesAndEquipment = ({ item, addItem }) => {
  const { product_name, product_price, product_image } = item;
  return (
    <div className="turntables-equipment-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${product_image})`
        }}
      />
      <div className="turntables-equipment-footer">
        <span className="name">{product_name}</span>
        <span className="price">{product_price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)}>
        Request For Delivery
      </CustomButton>
    </div>
  );
};

//on button click the product is being sent to redux store in the cart property
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(TurntablesAndEquipment);
