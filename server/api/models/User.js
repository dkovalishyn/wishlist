const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: String,
  password: String,
  refreshToken: String,
});

module.exports = mongoose.model('User', schema);
