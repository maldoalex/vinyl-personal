import React from "react";

const RightArrow = props => {
  return (
    <div className="nextArrow" onClick={props.goToNextSlide}>
      <i className="fas fa-chevron-right fa-2x" aria-hidden="true" />
    </div>
  );
};

export default RightArrow;
