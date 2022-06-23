import React from "react";
import "./toggleButton.scss";

const ToggleButton = ({ text }) => {
  return <button className="toggle-button">{text}</button>;
};

export default ToggleButton;
