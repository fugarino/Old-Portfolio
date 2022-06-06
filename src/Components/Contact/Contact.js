import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="balls">
        <div className="ball1"></div>
        <div className="ball2"></div>
        <div className="ball3"></div>
        <div className="ball4"></div>
        <div className="ball5"></div>
        <div className="ball6"></div>
      </div>
      <div className="form-container">
        <div className="form-text">
          <h2>Get in touch</h2>
          <p>Have any question?</p>
          <p>Shoot me an email.</p>
        </div>
        <form className="form">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea type="text" placeholder="Message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
