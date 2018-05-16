const mongoose = require('mongoose');

module.exports = mongoose.model('Wish', {
  userId: String,
  description: String
});

