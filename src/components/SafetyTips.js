const React = require("react");

function SafetyTips() {
  return React.createElement(
    "div",
    { className: "tips-container" },
    React.createElement("h2", null, "Safety Tips"),
    React.createElement(
      "ul",
      null,
      [
        "Keep your valuables secure and avoid displaying them in public.",
        "Use authorized taxis and public transport.",
        "Stay aware of your surroundings, especially in crowded places.",
        "Save emergency contacts on your phone.",
        "Respect local customs and laws."
      ].map(function(tip, i) {
        return React.createElement("li", { key: i }, tip);
      })
    )
  );
}

module.exports = SafetyTips;
