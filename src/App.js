import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav/Nav";
import Menu from "./Components/Menu/Menu";
import Hero from "./Components/Hero/Hero";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { faFileCode } from "@fortawesome/free-regular-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faHdd } from "@fortawesome/free-regular-svg-icons";
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
            <div className="top">
              <h4>Contents</h4>
              <button>
                <FontAwesomeIcon icon={faFolderOpen} className="icon" />
                <h3>Projects</h3>
              </button>
              <button>
                <FontAwesomeIcon icon={faFileCode} className="icon" />
                <h3>Skills</h3>
              </button>
              <button className="contact">
                <FontAwesomeIcon icon={faAddressBook} className="icon" />
                <h3>Contact</h3>
              </button>
              <hr />
              <h4 className="resources">Resources</h4>
              <button>
                <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                <h3>Linked In</h3>
              </button>
              <button>
                <FontAwesomeIcon icon={faGithub} className="icon" />
                <h3>GitHub</h3>
              </button>
            </div>
            <div className="bottom">
              <button>
                <FontAwesomeIcon icon={faHdd} className="icon" />
                <h3>Download CV</h3>
              </button>
              <button>
                <FontAwesomeIcon icon={faClipboard} className="icon" />
                <h3>Copy Email</h3>
              </button>
            </div>
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
