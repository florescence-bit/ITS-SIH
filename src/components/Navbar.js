const React = require("react");
const { Link } = require("react-router-dom");

function Navbar() {
  return React.createElement(
    "nav",
    { className: "navbar" },
    [
      React.createElement(Link, { to: "/home", key: "home" }, "Home"),
      React.createElement(Link, { to: "/safety-tips", key: "tips" }, "Safety Tips"),
      React.createElement(Link, { to: "/emergency-contacts", key: "contacts" }, "Emergency Contacts"),
      React.createElement(Link, { to: "/", key: "logout" }, "Logout")
    ]
  );
}

module.exports = Navbar;
