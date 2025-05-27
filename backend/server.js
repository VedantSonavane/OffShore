// backend/server.js
const express = require('express');

const app = express();

// Define port
const PORT = 8556;

// Basic route to confirm server is running
app.get('/', (req, res) => {
  res.send('Backend server is running on port 8556');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});