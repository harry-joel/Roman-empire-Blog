const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route to serve your main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'cars.html'));
});

// Change the PORT variable to 8080
const PORT = 8080; // Change this to 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
