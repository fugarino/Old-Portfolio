import React from "react";
import Image from "./Email2.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
      <div className="form-container">
        <div className="form-img">
          <img src={Image} alt="email" />
        </div>
        <div className="form-div">
          <div className="form-container">
            <div className="form-text">
              <h2>Get in touch</h2>
              <p>Have any question, email me.</p>
              {/* <p>Shoot me an email.</p> */}
            </div>
            <form className="form">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <textarea type="text" placeholder="Message" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
