import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./LibraryItem.scss";

const LibraryItem = ({ album }) => {
  return (
    <div className="albums">
      <div
        className="image"
        style={{
          backgroundImage: `url(${album.image[2][`#text`]})`
        }}
      />
      <div className="collection-footer">
        <span className="artist">{album.artist.name}</span>
        <span className="album">{album.name}</span>
      </div>
      <CustomButton>Request for Delivery</CustomButton>
    </div>
  );
};

export default LibraryItem;

{
  /* <img src={album.image[2][`#text`]} alt="album cover" />
 <p>{album.artist.name}</p>
 <p>{album.name}</p> */
}
