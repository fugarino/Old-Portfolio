import React from "react";
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
      <div className="contact-container"></div>
    </section>
  );
};

export default Contact;
