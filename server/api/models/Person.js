const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  friends: [mongoose.Schema.Types.ObjectId],
  followers: [mongoose.Schema.Types.ObjectId],
  following: [mongoose.Schema.Types.ObjectId],
  firstName: String,
  lastName: String,
  avatar: String,
});

module.exports = mongoose.model('Person', schema);
