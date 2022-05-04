import React from "react";
import Image from "./MainHero.gif";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <span className="opening-span">{"<About Me>"}</span>
          <h1>Christian Fugarino</h1>
          <h4>FRONT END DEVELOPER</h4>
          <p>
            Hi, I'm Christian. I share an immense passion for the web. <br /> Also, cats are better than dogs.
          </p>
          <button>Contact me!</button>
          <span className="closing-span">{"</About Me>"}</span>
        </div>
        <div className="hero-img">
          <img src={Image} alt="hero"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
