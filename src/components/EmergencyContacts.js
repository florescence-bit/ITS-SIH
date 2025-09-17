const React = require("react");

function EmergencyContacts() {
  return React.createElement(
    "div",
    { className: "contacts-container" },
    React.createElement("h2", null, "Emergency Contacts"),
    React.createElement(
      "ul",
      null,
      [
        { label: "Police", number: "100" },
        { label: "Ambulance", number: "102" },
        { label: "Fire", number: "101" },
        { label: "Tourist Helpline", number: "1363" },
        { label: "Women Helpline", number: "1091" }
      ].map(function(contact, i) {
        return React.createElement(
          "li",
          { key: i },
          contact.label + ": " + contact.number
        );
      })
    )
  );
}

module.exports = EmergencyContacts;
