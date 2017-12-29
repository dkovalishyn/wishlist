var mongoose = require('mongoose');

module.exports = mongoose.model('Wish', {
  id: String,
  description: String
});

