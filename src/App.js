import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./pages/welcome";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import SafetyTips from "./components/SafetyTips";
import EmergencyContacts from "./components/EmergencyContacts";
import "./styles/globals.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/safety-tips" element={<SafetyTips />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
