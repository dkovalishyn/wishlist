import Notification from '../../models/Notification';
/**
 * Reject notification
 *
 * POST: /api/v1/notification/{id}/reject
 *
 * path:
 *   id {string} Notification Id.
 *
 */

exports.handler = function rejectNotification(req, res) {
  const { params: { id } } = req;

  Notification.findByIdAndRemove(id, (err) => {
    if (err) {
      res.status(500).send(e.message);
      return;
    }

    res.sendStatus(200);
  });
};
