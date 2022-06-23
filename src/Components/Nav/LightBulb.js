import React from "react";
import "./LightBulb.scss";

const LightBulb = () => {
  return (
    <div className="light-bulb-container">
      <div className="light">
        <div className="wire"></div>
        <div className="bulb">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default LightBulb;
