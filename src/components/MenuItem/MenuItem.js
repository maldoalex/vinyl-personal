import React from "react";
import { withRouter } from "react-router-dom";

import "./MenuItem.scss";

const MenuItem = ({ title, imageUrl, size, history, link, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${link}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">Enter</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
