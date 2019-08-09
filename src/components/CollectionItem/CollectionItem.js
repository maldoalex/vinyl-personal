import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/Cart/cart.actions";
import "./CollectionItem.scss";
// product_name = { item.product_name }
// product_price = { item.product_price }
// product_image = { item.product_image }
const CollectionItem = ({ item, addItem }) => {
  const { product_name, product_price, product_image } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${product_image})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{product_name}</span>
        <span className="price">{product_price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)}>
        Request For Delivery
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
