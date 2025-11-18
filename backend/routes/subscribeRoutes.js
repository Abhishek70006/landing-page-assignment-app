const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

router.post('/', async (req,res) => {
  try {
    const { email } = req.body;
    if(!email) return res.status(400).json({message: "Email required"});
    const exists = await Subscriber.findOne({ email });
    if(exists) return res.status(200).json({message: "Already subscribed"});
    const sub = new Subscriber({ email });
    await sub.save();
    res.status(201).json(sub);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/all', async (req,res) => {
  try {
    const subs = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
