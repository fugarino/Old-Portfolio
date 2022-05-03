import React from "react";
import Image from "./MainHero.gif";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <h1>Christian Fugarino</h1>
          <h4>FRONT END DEVELOPER</h4>
          <button>Contact me!</button>
        </div>
        <div className="hero-img">
          <img src={Image} alt="hero"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
