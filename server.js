const express = require('express');
const connectDB = require('./config/db');
const commentsRoute = require('./routes/comments'); 
const path = require('path'); // Import the 'path' module to work with file paths
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB(); // Connect to MongoDB
    console.log('Database connection successful!');

    // Middleware for parsing JSON
    app.use(express.json());

    // Middleware for CORS (must be after app definition)
    app.use(cors());

    // Routes
    app.use('/api/comments', commentsRoute);

    // Serve static files from the React app's build folder
    app.use(express.static(path.join(__dirname, 'build')));

    // Catch-all route to serve the React app's index.html for any route that doesn't match the API routes
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });

    // Start the server only if the database connection is successful
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
    process.exit(1);
  }
};

startServer();
