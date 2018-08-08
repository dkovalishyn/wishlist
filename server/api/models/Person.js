const mongoose = require('mongoose');

module.exports = mongoose.model('Person', {
  userId: mongoose.Schema.Types.ObjectId,
  friends: [mongoose.Schema.Types.ObjectId],
  followers: [mongoose.Schema.Types.ObjectId],
  following: [mongoose.Schema.Types.ObjectId],
  firstName: String,
  lastName: String,
  avatar: String,
});
