import React from "react";

const Menu = ({ handleClick, menuIcon, content }) => {
  return (
    <menu className="menu">
      <div className="container">
        <button className={`btn ${menuIcon}`} onClick={handleClick}></button>
        {content}
      </div>
    </menu>
  );
};

export default Menu;
