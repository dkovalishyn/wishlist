import mongoose from 'mongoose';
import Person from '../../models/Person';
import Notification from '../../models/Notification';
import notificationTypes from '../../models/notificationTypes';
import wss from '../../../wss';

/**
 * followUser
 *
 * POST: /api/v1/user/{userId}/follow
 *
 * path:
 *   userId {string} User id who creates request.
 *
 * query:
 *   friendId {string} User if of person that you want to follow.
 *
 */

const { Types: { ObjectId } } = mongoose;

exports.handler = async function followUser(req, res) {
  const { params: { userId }, query: { friendId } } = req;
  const notificationData = {
    userId,
    friendId,
    type: notificationTypes.follow,
  };
  try {
    await Person.findOneAndUpdate(
      { userId: new ObjectId(userId) },
      { $addToSet: { following: friendId } },
    );
    await Person.findOneAndUpdate(
      { userId: new ObjectId(friendId) },
      { $addToSet: { followers: userId } },
    );
    const notification = await Notification.create(notificationData);

    wss.sendMessage(userId, notification);

    res.status(201).send(notification);
  } catch (e) {
    res.status(500).send(e.message);
  }
};

