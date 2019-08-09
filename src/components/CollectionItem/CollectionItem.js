import React from "react";

import "./CollectionItem.scss";

const CollectionItem = ({ id, product_name, product_price, product_image }) => (
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
  </div>
);

export default CollectionItem;
