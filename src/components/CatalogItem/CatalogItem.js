import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./CatalogItem.scss";

//component to structure the display of each mapped item from the api
const CatalogItem = ({ album }) => {
  return (
    <div className="albums">
      <div
        className="image"
        style={{
          backgroundImage: `url(${album.image[2][`#text`]})`
        }}
      />
      <div className="album-footer">
        <span className="artist">{album.artist.name}</span>
        <span className="album">{album.name}</span>
      </div>
      <CustomButton>Request for Delivery</CustomButton>
    </div>
  );
};

export default CatalogItem;

{
  /* <img src={album.image[2][`#text`]} alt="album cover" />
 <p>{album.artist.name}</p>
 <p>{album.name}</p> */
}
