const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');


// GET /api/comments - Fetch all comments
router.get('/', async (req, res) => {
    try {
      const comments = await Comment.find();
      res.status(200).json(comments);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// POST /api/comments - Create a new comment
router.post('/', async (req, res) => {
  const { author, content } = req.body;  // Destructure author and content from the body

  // Validate the input
  if (!content || !author) {
    return res.status(400).json({ error: 'Author and content are required' });
  }

  try {
    // Create a new comment and save it to MongoDB
    const newComment = new Comment({
      author: author,
      content: content,
      createdAt: new Date(),  // Add a timestamp for when the comment was created
    });

    await newComment.save(); // Save to the database

    res.status(201).json(newComment); // Respond with the saved comment
  } catch (err) {
    console.error('Error saving comment:', err.message); // Log the error
    res.status(500).json({ error: err.message });
  }
});
  
module.exports = router;