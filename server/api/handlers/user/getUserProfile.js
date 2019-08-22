const Person = require("../../models/Person");
const mongoose = require("mongoose");
/**
 * Get profile of current user
 *
 * GET: /api/v1/me
 *
 * header:
 *   Authorization Authorization token.
 *
 */
const {
  Types: { ObjectId }
} = mongoose;

exports.handler = function getUserProfile(req, res) {
  Person.findOne({ userId: new ObjectId(req.user._id) }, (err, user) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    if (!user) {
      res.sendStatus(404);
      return;
    }

    res.json(user);
  });
};
