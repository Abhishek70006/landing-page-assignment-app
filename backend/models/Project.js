const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  imageUrl: { type: String },
  name: { type: String, required: true },
  description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
