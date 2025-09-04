import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

export default function App() {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    backgroundColor: "#8B0000",
    padding: "15px",
    color: "white",
    fontWeight: "bold",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  };

  return (
    <Router>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/menu" style={linkStyle}>Menu</Link>
        <Link to="/reservations" style={linkStyle}>Reservations</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/gallery" style={linkStyle}>Gallery</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}
