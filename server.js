
// Import the express module
const express = require('express');

// Create an instance of an express application
const app = express();

// Define the port on which the server will run
const port = 3000;

// Define a GET API endpoint
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Hello, welcome to the API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
