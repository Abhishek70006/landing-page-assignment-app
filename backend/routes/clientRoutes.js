const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const uploadToCloudinary = require('../middleware/uploadToCloudinary');
const Client = require('../models/Client');

// GET all clients
router.get('/', async (req,res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST add client (admin)
router.post('/add', upload.single('image'), uploadToCloudinary, async (req,res) => {
  try {
    const { name, description, designation } = req.body;
    const imageUrl = req.fileUrl || '';
    const client = new Client({ name, description, designation, imageUrl });
    await client.save();
    res.status(201).json(client);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
