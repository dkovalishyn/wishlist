const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  friendId: mongoose.Schema.Types.ObjectId,
  type: mongoose.Schema({
    type: Number,
    description: String,
  })
});

module.exports = mongoose.model('Notification', schema);
