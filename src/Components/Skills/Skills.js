import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="header">Skills</h2>
      <main className="skills-grid">
        <div className="item">
          <i class="devicon-html5-plain colored"></i>
          <h4>HTML</h4>
        </div>
        <div className="item">
          <i class="devicon-css3-plain colored"></i>
          <h4>CSS</h4>
        </div>
        <div className="item">
          <i class="devicon-javascript-plain colored"></i>
          <h4>JavaScript</h4>
        </div>
        <div className="item">
          <i class="devicon-typescript-plain colored"></i>
          <h4>TypeScript</h4>
        </div>
        <div className="item">
          <i class="devicon-react-original colored"></i>
          <h4>React</h4>
        </div>
        <div className="item">
          <i class="devicon-redux-original colored"></i>
          <h4>Redux</h4>
        </div>
        <div className="item">
          <i class="devicon-sass-original colored"></i>
          <h4>Sass</h4>
        </div>
        <div className="item">
          <i class="devicon-tailwindcss-plain colored"></i>
          <h4>Tailwind</h4>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faGitAlt} className="git-alt" />
          <h4>Git</h4>
        </div>
        <div className="item">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="figma" />
          <h4>Figma</h4>
        </div>
      </main>
    </section>
  );
};

export default Skills;
