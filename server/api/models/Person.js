const mongoose = require('mongoose');

module.exports = mongoose.model('Person', {
  userId: String,
  firstName: String,
  lastName: String,
});
