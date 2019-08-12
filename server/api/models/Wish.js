const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: String,
  title: String,
  description: String,
  tags: [String],
  order: Number,
  price: String,
  image: String,
  priority: Number,
});

module.exports = mongoose.model('Wish', schema);
