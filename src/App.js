import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav/Nav";
import Menu from "./Components/Menu/Menu";
import Hero from "./Components/Hero/Hero";
import "./App.scss";

function App() {
  const [menuSize, setMenuSize] = useState("collapsed");
  const [menuIcon, setMenuIcon] = useState("hamburger");
  const [content, setContent] = useState(false);

  useEffect(() => {
    if (menuSize === "expanded") {
      setContent(
        <div className={menuSize}>
          <div className="menu-content">
            <button>Projects</button>
          </div>
        </div>
      );
    } else {
      setContent(<div className={menuSize}>{/* <h1 className="menu-content"></h1> */}</div>);
    }
  }, [menuSize]);

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
      <Menu handleClick={handleClick} menuIcon={menuIcon} menuSize={menuSize} content={content} />
      <span className="tag">{"<About Me>"}</span>
      <Hero />
      <span className="tag">{"</About Me>"}</span>
    </div>
  );
}

export default App;
