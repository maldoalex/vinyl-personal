import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { addItem } from "../../redux/Cart/cartReducer";
import { connect } from "react-redux";

import "./CatalogItem.scss";

//component to structure the display of each mapped item from the api
const CatalogItem = ({ album }) => {
  const styles = {
    backgroundImage: `url(${album.image[2][`#text`]})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat"
    // backgroundPosition: "50% 60%"
  };
  return (
    <div className="slide" style={styles}>
      <div className="album-footer">
        {/* <span className="artist">{album.artist.name}</span>
        <span className="album">{album.name}</span> */}
      </div>
      <CustomButton onClick={() => addItem(album)}>
        Request For Delivery
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = reduxState => ({
  cart: reduxState.cart
});

export default connect(
  mapDispatchToProps,
  { addItem }
)(CatalogItem);
