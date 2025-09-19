import React from "react";
import "../styles/globals.css";

export default function Welcome() {
  return (
    <div className="welcome-page">
      <h2 className="welcome-title">WELCOME TO INDIA!</h2>
      <img
        className="welcome-img"
        src="https://img.freepik.com/free-vector/indian-landmarks-concept-illustration_114360-12281.jpg?w=826&t=st=1716039327~exp=1716039927~hmac=6e6e0e8e7e6e0e8e7e6e0e8e7e6e0e8e"
        alt="India Landmarks"
      />
      <button className="welcome-btn primary" onClick={() => window.location.href = "/home"}>GET STARTED</button>
      <button className="welcome-btn secondary" onClick={() => window.location.href = "/home"}>LOGIN</button>
      <div className="welcome-guidelines">
        Learn more about safety guidelines
      </div>
    </div>
  );
}