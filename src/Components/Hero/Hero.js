import React from "react";
import HeroImage from "./Images/Hero1.gif";
// import HeroImageDark from "./Images/HeroDark.gif";
import HeroImageDark from "./Images/Hero2.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = ({ darkMode }) => {
  return (
    <section className="hero">
      <aside className="icon-btns">
        <button className="icon">
          <FontAwesomeIcon icon={faGithub} />
        </button>
        <button className="icon">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </button>
      </aside>
      <div className="hero-grid">
        <div className="hero-text">
          <h1>Christian Fugarino</h1>
          <h4>FRONT END DEVELOPER</h4>
          <p>
            Hi, I'm Christian. I share an immense passion for the web. <br /> Also, cats are better
            than dogs.
          </p>
          <button className="contact-btn">Contact me!</button>
        </div>
        <div className="hero-img">
          <img src={darkMode ? HeroImageDark : HeroImage} alt="hero"></img>
          {/* <img src={image} /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
