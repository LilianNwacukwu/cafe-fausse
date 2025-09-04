import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const Reservations = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(1);
  const [timeSlot, setTimeSlot] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/api/reservations",
        { name, email, phone, guests, time_slot: timeSlot }
      );
      setMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        setMessage(`❌ ${error.response.data.error}`);
      } else {
        setMessage("❌ Server not reachable.");
      }
    }
  };

  return (
    <div className="reservation-container">
      <h1>Make a Reservation</h1>
      <form onSubmit={handleSubmit} className="reservation-form">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Phone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label>Number of Guests:</label>
        <input type="number" value={guests} min="1" max="10" onChange={(e) => setGuests(e.target.value)} required />

        <label>Time Slot:</label>
        <input type="datetime-local" value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} required />

        <button type="submit">Reserve Table</button>
      </form>

      {message && <p className="reservation-message">{message}</p>}
    </div>
  );
};

export default Reservations;
