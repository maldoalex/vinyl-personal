import React from "react";
import { withRouter } from "react-router-dom";

import "./HomepageTiles.scss";

//component structures the display of the tiles on the homepage
const HomepageTiles = ({ title, image, size, history, page, match }) => (
  <div
    className={`${size} tile`}
    onClick={() => history.push(`${match.url}${page}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${image})`
      }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle" />
    </div>
  </div>
);

export default withRouter(HomepageTiles);
