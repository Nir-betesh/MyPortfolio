const mongoose = require('mongoose');

// Define the schema for the Comment model
const commentSchema = new mongoose.Schema({
  author: {type: String, required: true},
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create the model based on the schema
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
