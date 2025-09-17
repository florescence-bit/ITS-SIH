const React = require("react");

function Home() {
  return React.createElement(
    "div",
    { className: "home-container" },
    React.createElement("h2", null, "Welcome to India Tourism Safety"),
    React.createElement(
      "p",
      null,
      "Get safety tips, emergency contacts, and more for a secure journey in India."
    )
  );
}

module.exports = Home;
