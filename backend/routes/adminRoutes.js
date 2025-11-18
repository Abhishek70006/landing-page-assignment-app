const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const Subscriber = require('../models/Subscriber');

router.get('/contact-data', async (req,res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) { res.status(500).json({ message: err.message }) }
});

router.get('/subscribers', async (req,res) => {
  try {
    const subs = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subs);
  } catch (err) { res.status(500).json({ message: err.message }) }
});

module.exports = router;
