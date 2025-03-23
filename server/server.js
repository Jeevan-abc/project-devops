const express = require('express');
const path = require('path');
const cors =require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React frontend build
app.use(express.static(path.join(__dirname, '../client/build')));

// API route to send JSON response
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Catch-all route to serve the React app for any other request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Start the server and listen on the specified port
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${port}`);
});
