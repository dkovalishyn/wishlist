import Notification from '../../models/Notification';
/**
 * getNotifications
 *
 * GET: /api/v1/notification/{userId}
 *
 * path:
 *   userId {string} User Id.
 *
 */
exports.handler = function getNotifications(req, res, next) {
  Notification.find({}, (err, data) => {
    if (err) {
      req.status(500).send(err.message);
      return;
    }

    res.send(data);
  })
};
