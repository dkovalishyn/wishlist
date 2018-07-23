import Person from '../../models/Person';

/**
 * putUser
 *
 * PUT: /api/v1/user/{userId}
 *
 * path:
 *   userId {string} User Id.
 *
 * body:
 *   name {string}
 *   lastName {string}
 *
 */
exports.handler = function putUser(req, res) {
  const { body: userData, params: { userId: id } } = req;

  const options = {
    new: true,
  };

  Person.findOneAndUpdate({ userId: id }, userData, options, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    if (!data) {
      res.sendStatus(404);
      return;
    }

    res.send(data);
  })
};
