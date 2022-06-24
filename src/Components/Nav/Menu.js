import React, { useState } from "react";
import "./menu.scss";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <div className="menu">
      <div className={`overlay ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
          <li>Dark Mode</li>
        </ul>
      </div>
      <button onClick={toggleMenu}></button>
    </div>
  );
};

export default Menu;
