import { useState } from "react";

function ReservationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeslot, setTimeslot] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:5000/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, timeslot }),
    });

    const data = await response.json();
    if (response.ok) {
      alert(`Reservation confirmed! Table: ${data.table_number} at ${data.timeslot}`);
    } else {
      alert(`Error: ${data.error}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="datetime-local" value={timeslot} onChange={(e) => setTimeslot(e.target.value)} required />
      <button type="submit">Reserve</button>
    </form>
  );
}

export default ReservationForm;
