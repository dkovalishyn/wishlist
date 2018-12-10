const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: String,
  title: String,
  description: String,
  tags: [String],
  order: Number,
  imagePath: String,
  imageUrl: String
});

module.exports = mongoose.model('Wish', schema);
