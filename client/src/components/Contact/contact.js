// src/components/contact.js
import React, { useState } from "react";
import "./contact.scss"; // Import the contact styles

function Contact() {
  // Define state to manage form values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Construct the email body, using only the message content
    const emailBody = `Message: ${message}`;

    // Encode the content to be used in the mailto link
    const subject = "New Contact Message";
    const mailtoLink = `mailto:tibdewalchahak1264@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Trigger the mailto link (open default email client)
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container" id="contact">
      {/* Contact Header with Image */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>I would love to hear from you! Feel free to reach out.</p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="form-actions">
            <input type="submit" value="Send Message" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
