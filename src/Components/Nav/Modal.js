import React from "react";
import ReactDom from "react-dom";
import "./modal.scss";

const Modal = ({ isMenuOpen }) => {
  return ReactDom.createPortal(
    <div className={`overlay ${isMenuOpen ? "open" : ""}`}>
      <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Contact</li>
        <li>Dark Mode</li>
      </ul>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
