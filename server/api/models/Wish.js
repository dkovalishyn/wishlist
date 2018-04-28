const mongoose = require('mongoose');

module.exports = mongoose.model('Wish', {
  description: String
});

