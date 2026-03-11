const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const Admin = require('../models/Admin');

// IMPORTANT: load .env from project root
dotenv.config({
  path: path.resolve(__dirname, '../.env'),
});

async function run() {
  try {
    console.log('Starting createAdmin script...');

    console.log('process.env.MONGODB_URI =', process.env.MONGODB_URI);

    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI is NOT set in .env');
      process.exit(1);
    } else {
      console.log('MONGODB_URI found');
    }

    const email = process.env.ADMIN_EMAIL;
    const plainPassword = process.env.ADMIN_PASSWORD;

    if (!email || !plainPassword) {
      console.error('ADMIN_EMAIL or ADMIN_PASSWORD not set in .env');
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Delete all existing admins to ensure only ONE test admin exists
    const deleted = await Admin.deleteMany({});
    console.log(`Deleted ${deleted.deletedCount} existing admin(s).`);

    const passwordHash = await bcrypt.hash(plainPassword, 12);

    await Admin.create({ email, passwordHash });

    console.log('Single Admin created/reset successfully');
    console.log('Email:', email);
    console.log('Password (keep this safe):', plainPassword);
    process.exit(0);
  } catch (err) {
    console.error('Error creating admin:', err);
    process.exit(1);
  }
}

run();
