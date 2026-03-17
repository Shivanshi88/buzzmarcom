// backend/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Static for uploaded images (agar blog thumbnails local upload se aa rahe hain)
app.use('/uploads', express.static('uploads'));

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    state: mongoose.connection.readyState
  });
});

// ROUTES
const postRoutes = require('./routes/posts');
const enquiryRoutes = require('./routes/enquiries');
app.use('/api/posts', postRoutes);
app.use('/api/enquiries', enquiryRoutes);

//Admin routes
const adminRoutes = require('./routes/admin');
app.use('/api/admin', adminRoutes);

// Test route for posts
app.get('/api/posts/test', (req, res) => {
  res.json({ message: 'Posts API ready with MongoDB!' });
});

// MongoDB Connect
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Atlas Connected!'))
  .catch((err) => console.error('MongoDB Error:', err.message));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port number: ${PORT}`);
});
