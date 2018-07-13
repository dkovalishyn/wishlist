import Person from '../../models/Person';

/**
 * getUsers
 *
 * GET: /api/v1/user
 *
 */
exports.handler = function getUsers(req, res) {
  Person.find({}, (err, data) => {
    if (err) {
      res.sendStatus(500);
    }

    res.send(data);
  })
};
