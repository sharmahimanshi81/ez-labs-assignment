import React, { useState } from "react";
import FooterVector from "../assets/FooterVector.png";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  //  Validate 10-digit numeric phone number
  const validatePhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all required fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus("Please enter a valid email.");
      return;
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      setStatus("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Form Submitted Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Submission failed. Please try again.");
      }
    } catch {
      setStatus("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-container">
      {/* Mandala Backgrounds */}
      <img src={FooterVector} alt="Left Design" className="footer-left" />
      <img src={FooterVector} alt="Right Design" className="footer-right" />

      {/* Left Text */}
      <div className="contact-left">
        <p>
          Whether you have an idea, a question, or simply want to explore how we can work
          together, we’re just a message away. Let’s catch up over coffee — great stories
          always begin with a good conversation.
        </p>
      </div>

      {/* Right Form Section */}
      <div className="contact-right">
        <h2 className="join-story">Join the Story</h2>
        <p>Ready to bring your vision to life? Let’s talk.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your name*"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Your email*"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={(e) => {
              //  Allow only numbers
              const value = e.target.value.replace(/\D/g, "");
              setFormData({ ...formData, phone: value });
            }}
            maxLength="10"
          />
          <textarea
            placeholder="Your message*"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        <p className="status">{status}</p>

        <p className="contact-info">
          verrita@varnanfilms.co.in | +91 98736 84567
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
