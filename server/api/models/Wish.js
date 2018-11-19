const mongoose = require('mongoose');

module.exports = mongoose.model('Wish', {
  userId: String,
  title: String,
  description: String,
  occasion: String,
  picture: Buffer
});

