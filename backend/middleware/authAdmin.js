// backend/middleware/authAdmin.js
const jwt = require('jsonwebtoken');

function authAdmin(req, res, next) {
  const authHeader = req.headers.authorization || '';

  const token = authHeader.startsWith('Bearer ')
    ? authHeader.slice(7).trim()
    : null;

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET not set');
    return res.status(500).json({ error: 'Server config error' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== 'admin') {
      return res.status(403).json({ error: 'Not authorized' });
    }

    req.admin = decoded;
    next();
  } catch (err) {
    console.error('JWT verify error details:', err.message, err.name);
    return res.status(401).json({ error: 'Invalid or expired token', details: err.message });
  }
}

module.exports = authAdmin;
