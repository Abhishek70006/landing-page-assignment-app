const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer(); // memory storage
const uploadToCloudinary = require('../middleware/uploadToCloudinary');
const Project = require('../models/Project');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST add project (admin)
router.post('/add', upload.single('image'), uploadToCloudinary, async (req, res) => {
  try {
    const { name, description } = req.body;
    const imageUrl = req.fileUrl || '';
    const project = new Project({ name, description, imageUrl });
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
