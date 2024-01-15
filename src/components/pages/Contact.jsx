import React from "react";

function Contact() {
  return (
    <div>
      <div className="top">
        <h1 className="">Contact us</h1>
      </div>
      <div className='top-p'>
        <p>
          We'd love to hear from you. Reach out to us for all your barbecue
          needs!
        </p>
      </div>
      <div className="contact-us-container">
        <form className="contact-form">
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label className="email" htmlFor="email">
            Your Email:
          </label>
          <input type="email" id="email" name="email" required />

          <label className="message" htmlFor="message">
            Your Message:
          </label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button className="submit" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
