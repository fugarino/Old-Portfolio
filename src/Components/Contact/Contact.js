import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "./CatAlt.png";

const Contact = () => {
  return (
    <section className="contact-section">
      <aside className="icon-btns">
        <button className="icon">
          <FontAwesomeIcon icon={faGithub} />
        </button>
        <button className="icon">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </button>
      </aside>
      <div className="cat-container">
        <img src={Image} alt="cat" />
        <div className="contact-container">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffdcc4"
              // fill="#ffe5d4"
              fillOpacity="1"
              d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,202.7C672,181,768,171,864,186.7C960,203,1056,245,1152,229.3C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
          <div className="contact-text">
            <div className="helper">
              <h5>Get in touch</h5>
              <p>Have any questions? Shoot me an email.</p>
            </div>
          </div>
          <div className="contact-btn-container">
            <button className="contact-btn">Contact me!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
