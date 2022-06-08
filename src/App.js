import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav/Nav";
import Menu from "./Components/Menu/Menu";
import Hero from "./Components/Hero/Hero";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
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
          <div className="menu-content" id="press">
            <div className="top" id="press">
              <h4 id="press">Content</h4>
              <button id="press">
                <FontAwesomeIcon id="press" icon={faFolderOpen} className="icon" />
                <h3 id="press">Projects</h3>
              </button>
              <button id="press">
                <FontAwesomeIcon id="press" icon={faFileCode} className="icon code-icon" />
                <h3 id="press" className="skills">
                  Skills
                </h3>
              </button>
              <button id="press" className="contact">
                <FontAwesomeIcon id="press" icon={faAddressBook} className="icon contact-icon" />
                <h3 id="press" className="contact-text">
                  Contact
                </h3>
              </button>
              <h4 id="press" className="resources">
                Resources
              </h4>
              <button id="press">
                <FontAwesomeIcon id="press" icon={faLinkedinIn} className="icon" />
                <h3 id="press" className="linkedin">
                  Linked In
                </h3>
              </button>
              <button id="press" className="menu-btn">
                <FontAwesomeIcon id="press" icon={faGithub} className="icon" />
                <h3 id="press" className="github">
                  GitHub
                </h3>
              </button>
            </div>
            <div id="press" className="bottom">
              <button id="press">
                <FontAwesomeIcon id="press" icon={faHdd} className="icon" />
                <h3 id="press">Download CV</h3>
              </button>
              <button id="press">
                <FontAwesomeIcon id="press" icon={faClipboard} className="icon" />
                <h3 id="press" className="email">
                  Copy Email
                </h3>
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
    console.log(e.target.id);
    if (menuSize !== "collapsed" && e.target.className !== "expanded" && e.target.id !== "press") {
      setMenuSize("collapsed");
      setMenuIcon("hamburger");
    }
  };

  return (
    <div className="App" onClick={closeMenu}>
      <Nav />
      <Menu handleClick={handleClick} menuIcon={menuIcon} menuSize={menuSize} content={content} />
      <div className="tag">{"<About Me>"}</div>
      <Hero />
      <div className="tag">{"</About Me>"}</div>
      <div className="tag project-tag">{"<Projects>"}</div>
      <Projects />
      <div className="tag project-tag">{"</Projects>"}</div>
      <div className="tag skill-tag">{"<Skills>"}</div>
      <Skills />
      <div className="tag skill-tag">{"</Skills>"}</div>
      <div className="tag contact-tag">{"<Contact>"}</div>
      <Contact />
      <div className="tag contact-tag">{"</Contact>"}</div>
      <div className="copyright-div">
        <div className="cvEmail">
          <span className="cv-email">download cv</span>
          <span className="divider">/</span>
          <span className="cv-email mail">copy email</span>
        </div>
        <span className="copyright">&copy; 2022 Christian Fugarino</span>
      </div>
    </div>
  );
}

export default App;
