import React from "react";
import "./menu.scss";

const Menu = ({ toggleMenu }) => {
  return (
    <div className="menu">
      <button onClick={toggleMenu}></button>
    </div>
  );
};

export default Menu;
