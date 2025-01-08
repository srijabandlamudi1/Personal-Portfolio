import React, { useState } from 'react';
import './Contactform.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {
          const response = await fetch('https://formspree.io/f/xdkokgqj', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          });

          if (response.ok) {
              alert('Message sent successfully!');
              setFormData({ name: '', email: '', subject: '', message: '' });
          } else {
              alert('Failed to send message. Please try again.');
          }
      } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again later.');
      }
  };

    return (
        <div id="Contact" className="contact-form-section">
            <h2>CONTACT ME</h2> {/* Move heading outside the form container */}
            <div className="contact-form-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
