import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="form-container">
        <div className="form-text">
          <h2>Get in touch</h2>
          <p>Have any question?</p>
          <p>Shoot me an email.</p>
        </div>
        <div className="form-div">
          <div className="form-cont">
            <form className="form"></form>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#C8DFE6"
            fill-opacity="1"
            d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,202.7C840,181,960,107,1080,80C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
