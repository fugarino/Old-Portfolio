import React from "react";

const Menu = ({ handleClick, menuIcon, menuSize }) => {
  // console.log(closeMenu);
  // const [menuSize, setMenuSize] = useState("collapsed");
  // const [menuIcon, setMenuIcon] = useState("hamburger");

  // const handlClick = () => {
  //   setMenuSize(menuSize === "collapsed" ? "expanded" : "collapsed");
  //   setMenuIcon(menuIcon === "hamburger" ? "close" : "hamburger");
  // };

  return (
    <menu className="menu">
      <div className="container">
        <button className={menuIcon} onClick={handleClick}></button>
        <div className={menuSize}></div>
      </div>
    </menu>
  );
};

export default Menu;
