import React, { useState } from "react";
import axios from "axios"; // Make sure axios is installed
import "./styles.css";

const Home = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/newsletter", formData);
      setMessage(response.data.message); // Success message from Flask
      setFormData({ name: "", email: "", phone: "" }); // Clear form
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data.error); // Error from Flask
      } else {
        setMessage("Server not reachable.");
      }
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Café Fausse</h1>
      <p className="home-subtitle">Experience fine dining with elegance and style.</p>

      <div className="newsletter">
        <h2>Subscribe to Our Newsletter</h2>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            placeholder="Your Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Home;
