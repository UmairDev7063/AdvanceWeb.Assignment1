import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <section className="contact-card contact-left">
          <div className="section-title">
            <span className="section-marker">LOCATION</span>
          </div>
          <p className="section-text">#2661 Janakpuri Colony, city name, town name</p>

          <div className="section-title">
            <span className="section-marker">EMAIL</span>
          </div>
          <p className="section-text">harshitvashisth@mycompany.com</p>

          <div className="section-title">
            <span className="section-marker">CALL</span>
          </div>
          <p className="section-text">+910101010101</p>

          <div className="company-image">
            <span>Company Image</span>
          </div>
        </section>

        <section className="contact-card contact-right">
          <div className="contact-header">
            <h1>Contact Us</h1>
            <p>Let us know your questions, suggestions and concerns by filling out the contact form below.</p>
          </div>

          <form className="contact-form">
            <label>
              Username*
              <input type="text" placeholder="Enter your username" />
            </label>
            <label>
              Email*
              <input type="email" placeholder="Enter your email" />
            </label>
            <label>
              Phone*
              <input type="tel" placeholder="Enter your phone" />
            </label>
            <label>
              Message*
              <textarea rows="8" placeholder="Type your message"></textarea>
            </label>
            <button type="submit" className="submit-button">SUBMIT</button>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Contact;
