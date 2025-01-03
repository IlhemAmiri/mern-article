const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Article', articleSchema);
