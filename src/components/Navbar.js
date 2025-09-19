import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  // Hide navbar on welcome page for a clean look
  if (location.pathname === "/") return null;
  return (
    <nav className="navbar">
      <div className="navbar-logo">Smart India Tourism Safety</div>
      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/safety-tips">Safety Tips</Link>
        <Link to="/emergency-contacts">Emergency Contacts</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}
