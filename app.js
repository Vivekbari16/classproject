const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello, World! This is my first Node.js web application.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
