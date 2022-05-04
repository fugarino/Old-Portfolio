import React, { useState } from "react";
import Nav from "./Components/Nav/Nav";
import Menu from "./Components/Menu/Menu";
import Hero from "./Components/Hero/Hero";
import "./App.scss";

function App() {
  const [menuSize, setMenuSize] = useState("collapsed");
  const [menuIcon, setMenuIcon] = useState("hamburger");

  const handleClick = () => {
    setMenuSize(menuSize === "collapsed" ? "expanded" : "collapsed");
    setMenuIcon(menuIcon === "hamburger" ? "close" : "hamburger");
  };

  const closeMenu = (e) => {
    console.log(e.target.className);
    if (menuSize !== "collapsed" && e.target.className !== "expanded") {
      setMenuSize("collapsed");
      setMenuIcon("hamburger");
    }
  };

  return (
    <div className="App" onClick={closeMenu}>
      <Nav />
      <Menu handleClick={handleClick} menuIcon={menuIcon} menuSize={menuSize} />
      <span className="tag">{"<About Me>"}</span>
      <Hero />
      <span className="tag">{"</About Me>"}</span>
    </div>
  );
}

export default App;
