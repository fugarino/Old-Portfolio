import React, { useState } from "react";

const Menu = () => {
  const [menuSize, setMenuSize] = useState("collapsed");
  const [menuIcon, setMenuIcon] = useState("hamburger");

  const handlClick = () => {
    setMenuSize(menuSize === "collapsed" ? "expanded" : "collapsed");
    setMenuIcon(menuIcon === "hamburger" ? "close" : "hamburger");
  };

  return (
    <menu className="menu">
      <div className="container">
        <button className={menuIcon} onClick={handlClick}></button>
        <div className={menuSize}></div>
      </div>
    </menu>
  );
};

export default Menu;
