const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  imageUrl: { type: String },
  name: { type: String, required: true },
  description: { type: String },
  designation: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Client', clientSchema);
