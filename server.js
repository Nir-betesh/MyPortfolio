const express = require('express');
const connectDB = require('./config/db');
const commentsRoute = require('./routes/comments'); 
const cors = require('cors'); // Import CORS to allow requests from your frontend
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB(); 
    console.log('Database connection successful!');

    // Enable CORS for requests from your deployed frontend
    app.use(
      cors({
        origin: 'https://my-portfolio-red-eight-91.vercel.app', 
        credentials: true,
      })
    );

    // Middleware for parsing JSON
    app.use(express.json());

    // API Routes
    app.use('/api/comments', commentsRoute);

    // Start the server only if the database connection is successful
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error.message);
    process.exit(1); // Exit with error
  }
};

startServer();
