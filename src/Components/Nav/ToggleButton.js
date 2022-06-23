import React from "react";
import Image from "./lightbulb.svg";
import "./toggleButton.scss";

const ToggleButton = () => {
  return (
    <button className="toggle-button">
      <img src={Image} alt="lightbulb" />
    </button>
  );
};

export default ToggleButton;
