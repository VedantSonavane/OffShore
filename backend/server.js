// backend/server.js
const express = require('express');

const app = express();

// Define port
const PORT = process.env.PORT || 8556;
const HOST = '0.0.0.0';

// Basic route to confirm server is running
app.get('/', (req, res) => {
  res.send('Backend server is running on port 8556');
});

// Start server
app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});