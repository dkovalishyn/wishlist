import Person from '../../models/Person';

/**
 * getUserById
 *
 * GET: /api/v1/user/{userId}
 *
 * path:
 *   userId {string} User Id.
 *
 */
exports.handler = function getUserById(req, res) {
  const { params: { userId: id } } = req;

  Person.find({ userId: id }, (err, data) => {
    if (err) {
      res.status(404).send(err.message);
      return;
    }

    res.send(data);
  })
};
