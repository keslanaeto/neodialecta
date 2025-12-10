import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <h2>Contact Us 💬</h2>
      <p>We’d love to hear from you! Whether you have questions, feedback, or partnership ideas — drop us a message below.</p>

      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message 
          </button>
        </form>

        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>📍 Lagos, Nigeria</p>
          <p>📧 hello@neodialecta.com</p>
          <p>📞 +234 901 742 8035</p>
          <p>🌍 www.neodialecta.com</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
