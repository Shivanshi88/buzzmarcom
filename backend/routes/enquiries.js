// backend/routes/enquiries.js
const express = require('express');
const Enquiry = require('../models/Enquiry');
const authAdmin = require('../middleware/authAdmin');

const router = express.Router();

// POST /api/enquiries -> public: save enquiry
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: 'Name, email and message are required' });
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      message,
    });

    res.status(201).json(enquiry);
  } catch (err) {
    console.error('Enquiry create error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/enquiries -> admin only
router.get('/', authAdmin, async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
    console.error('Enquiry list error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// PATCH /api/enquiries/:id/read -> admin only
router.patch('/:id/read', authAdmin, async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    if (!enquiry) {
      return res.status(404).json({ error: 'Enquiry not found' });
    }
    res.json(enquiry);
  } catch (err) {
    console.error('Enquiry update error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/enquiries/:id -> admin only
router.delete('/:id', authAdmin, async (req, res) => {
  try {
    const enquiry = await Enquiry.findByIdAndDelete(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ error: 'Enquiry not found' });
    }
    res.json({ success: true });
  } catch (err) {
    console.error('Enquiry delete error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
