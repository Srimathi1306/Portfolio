import { useState } from "react";
import { submitContactMessage } from "../services/contactService";

function Contact() {
  const [contactMessage, setContactMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setContactMessage({
      ...contactMessage,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitContactMessage(contactMessage)
      .then(() => {
        setSuccessMessage(
          "Your message has been sent successfully. I will review it soon.",
        );

        setContactMessage({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error submitting contact message:", error);
        setSuccessMessage("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="section">
      <h1 className="section-title">Contact</h1>

      {successMessage && <p className="success-message">{successMessage}</p>}

      <div className="card">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={contactMessage.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={contactMessage.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={contactMessage.subject}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={contactMessage.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
