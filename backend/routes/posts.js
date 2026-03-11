const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

// 1. GET all published posts (Frontend ke liye)
router.get('/public', async (req, res) => {
  try {
    const posts = await Post.find({ status: 'published' })
      .select('title tag excerpt image date slug')
      .sort({ date: -1 })
      .limit(9);
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. GET single post by slug
router.get('/public/:slug', async (req, res) => {
  try {
    const post = await Post.findOne({ 
      slug: req.params.slug, 
      status: 'published' 
    });
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 3. Test route - Create sample post
router.post('/test-create', async (req, res) => {
  try {
    const post = new Post({
      title: 'Test Blog Post from API',
      tag: 'Test',
      excerpt: 'This post created automatically!',
      content: 'Full content here...',
      status: 'published',
      slug: 'test-blog-post-api'
    });
    await post.save();
    res.json({ message: 'Test post created!', post });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// routes/posts.js
router.post('/', async (req, res) => {
  try {
    const { title, tag, excerpt, content, status } = req.body;
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const post = await Post.create({ title, tag, excerpt, content, status, slug });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// ADMIN: get all posts (draft + published)
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADMIN: create new post
router.post('/', async (req, res) => {
  try {
    const { title, tag, excerpt, content, status } = req.body;

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    const post = await Post.create({
      title,
      tag,
      excerpt,
      content,
      status: status || 'draft',
      slug,
    });

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADMIN: update post
router.put('/:id', async (req, res) => {
  try {
    const { title, tag, excerpt, content, status } = req.body;

    const updateData = { tag, excerpt, content, status };
    if (title) {
      updateData.title = title;
      updateData.slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
    }

    const post = await Post.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!post) return res.status(404).json({ error: 'Post not found' });

    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ADMIN: delete post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ error: 'Post not found' });
    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
