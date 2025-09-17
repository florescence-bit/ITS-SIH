const React = require("react");
const { Routes, Route } = require("react-router-dom");
const Welcome = require("./components/Welcome");
const Login = require("./components/Login");
const Home = require("./components/Home");
const SafetyTips = require("./components/SafetyTips");
const EmergencyContacts = require("./components/EmergencyContacts");
const Navbar = require("./components/Navbar");
require("./style.css");

function App() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Navbar, null),
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: "/", element: React.createElement(Welcome, null) }),
      React.createElement(Route, { path: "/login", element: React.createElement(Login, null) }),
      React.createElement(Route, { path: "/home", element: React.createElement(Home, null) }),
      React.createElement(Route, { path: "/safety-tips", element: React.createElement(SafetyTips, null) }),
      React.createElement(Route, { path: "/emergency-contacts", element: React.createElement(EmergencyContacts, null) })
    )
  );
}

module.exports = App;
