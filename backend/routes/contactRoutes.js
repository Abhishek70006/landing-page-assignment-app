const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST contact form
router.post('/', async (req,res) => {
  try {
    const { fullName, email, mobile, city } = req.body;
    const contact = new Contact({ fullName, email, mobile, city });
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all contacts (admin)
router.get('/all', async (req,res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
