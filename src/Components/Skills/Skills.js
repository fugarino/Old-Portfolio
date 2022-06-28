import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGitAlt } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <section className="skills-section">
      <main className="skills-grid">
        <div className="item">
          <i className="devicon-html5-plain colored"></i>
          <h4>HTML</h4>
        </div>
        <div className="item">
          <i className="devicon-css3-plain colored"></i>
          <h4>CSS</h4>
        </div>
        <div className="item">
          <i className="devicon-javascript-plain colored"></i>
          <h4>JavaScript</h4>
        </div>
        <div className="item">
          <i className="devicon-typescript-plain colored"></i>
          <h4>TypeScript</h4>
        </div>
        <div className="item">
          <i className="devicon-react-original colored"></i>
          <h4>React</h4>
        </div>
        <div className="item">
          <i className="devicon-redux-original colored"></i>
          <h4>Redux</h4>
        </div>
        <div className="item">
          {/* <i className="devicon-nextjs-original-wordmark colored"></i> */}
          <i class="devicon-gatsby-plain colored"></i>
          <h4>Gatsby</h4>
        </div>
        <div className="item">
          <i style={{ color: "darkSlateGray" }} className="devicon-nextjs-original colored"></i>
          <h4>Next.js</h4>
        </div>
        <div className="item">
          {/* <i className="devicon-sass-original colored"></i> */}
          <i className="devicon-jest-plain colored"></i>
          <h4>Jest</h4>
        </div>
        <div className="item">
          <FontAwesomeIcon icon={faGitAlt} className="git-alt" />
          <h4>Git</h4>
        </div>
      </main>
    </section>
  );
};

export default Skills;
