const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tag: { type: String, required: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  image: String,
  date: { type: Date, default: Date.now },
  slug: { type: String, unique: true },
  status: { type: String, default: 'draft' } 
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);
