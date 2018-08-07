import Notification from '../../models/Notification';
/**
 * getNotifications
 *
 * GET: /api/v1/notification
 *
 * path:
 *   userId {string} User Id.
 *
 */
exports.handler = function getNotifications(req, res, next) {
  Notification.find({ userId: req.user._id }, (err, data) => {
    if (err) {
      return next(err);
    }

    res.send(data);
  })
};
