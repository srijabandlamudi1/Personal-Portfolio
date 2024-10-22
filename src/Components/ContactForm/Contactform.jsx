import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div id="Contact" className="contact-form-section">
      <div className="contact-form-container">
        <h2>Connect with me</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Stay Connected ▶</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
