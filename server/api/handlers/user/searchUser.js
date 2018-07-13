import Person from '../../models/Person';

/**
 * searchUser
 *
 * GET: /api/v1/user/search
 *
 * query:
 *   firstName {string} First name of User.
 *   lastName {string} Last name of User.
 *   age {integer} Age of User.
 *
 */
exports.handler = function searchUser(req, res) {
  const { body: userData } = req;
  Person.find(userData, (err, data) => {
    if (err) {
      res.status(404).send(err.message);
      return;
    }

    res.send(data);
  })
};
