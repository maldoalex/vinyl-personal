import React from "react";

const LeftArrow = props => {
  return (
    <div className="backArrow" onClick={props.goToPrevSlide}>
      <i className="fas fa-chevron-left fa-2x" aria-hidden="true" />
    </div>
  );
};

export default LeftArrow;
