// backend/routes/admin.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

const router = express.Router();

// POST /api/admin/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, admin.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not set in .env');
      return res.status(500).json({ error: 'Server config error' });
    }

    const token = jwt.sign(
      { id: admin._id, role: 'admin', email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({ token });
  } catch (err) {
    console.error('Admin login error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

// TEMP: GET /api/admin/seed-admin
// Use to create/reset a single admin on Render without shell access.
// Protected via ADMIN_SEED_ENABLED env flag so it can be disabled after use.
router.get('/seed-admin', async (req, res) => {
  try {
    if (process.env.ADMIN_SEED_ENABLED !== 'true') {
      return res.status(403).json({ error: 'Admin seeding is disabled' });
    }

    const email = process.env.ADMIN_EMAIL;
    const plainPassword = process.env.ADMIN_PASSWORD;

    if (!email || !plainPassword) {
      return res
        .status(500)
        .json({ error: 'ADMIN_EMAIL or ADMIN_PASSWORD not set in env' });
    }

    await Admin.deleteMany({});
    const passwordHash = await bcrypt.hash(plainPassword, 12);
    await Admin.create({ email, passwordHash });

    return res.json({
      message: 'Admin seeded successfully',
      email,
    });
  } catch (err) {
    console.error('Admin seed error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
