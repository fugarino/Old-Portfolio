import React from "react";
import Menu from "./Menu";

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <h1 className="logo">CRIS</h1>
        <span className="cv-email">download cv</span>
        <span className="divider">/</span>
        <span className="cv-email mail">copy email</span>
      </div>
      <Menu />
    </nav>
  );
};

export default Nav;
