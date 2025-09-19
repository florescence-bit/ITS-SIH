// This is a placeholder file for backend/server code.
// You can use Express or any other Node.js framework here if needed.

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Example route
app.get("/", (req, res) => {
  res.send("Smart India Tourism Safety System backend is running.");
});

// Start server
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`);
});