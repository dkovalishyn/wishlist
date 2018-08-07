/**
 * Accept notification
 *
 * POST: /api/v1/notification/{id}/accept
 *
 * path:
 *   id {string} Notification Id.
 *
 */
import Notification from '../../models/Notification';
import mongoose from 'mongoose';

const { Types: { ObjectId } } = mongoose;

exports.handler = function acceptNotification(req, res, next) {
  const { params: { id } } = req;
  Notification.findByIdAndDelete(id, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    const { userId, friendId } = data;

    Promise.all(
      [
        Person.findAndUpdate({ userId: new ObjectId(userId) }, {
          $addToSet: { friends: friendId },
          $pull: { following: friendId },
        }),
        Person.findAndUpdate({ userId: new ObjectId(friendId) }, {
          $addToSet: { friends: userId },
          $pull: { followers: userId },
        }),
        Notification.findOneAndDelete(),
      ]
    )
      .then(() => res.sendStatus(200))
      .catch((e) => res.status(500).send(e.message));
  })
};
