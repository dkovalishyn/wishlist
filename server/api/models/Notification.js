const mongoose = require('mongoose');

module.exports = mongoose.model('Notification', {
  userId: mongoose.Schema.Types.ObjectId,
  friendId: mongoose.Schema.Types.ObjectId,
  type: mongoose.Schema({
    type: Number,
    description: String,
  })
});
