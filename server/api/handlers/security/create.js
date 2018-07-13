import User from '../../models/User';
import Person from '../../models/Person';

/**
 * create
 *
 * POST: /api/v1/account
 *
 * body:
 *   name {string}
 *   lastName {string}
 *
 */
exports.handler = function create(req, res) {
  const { body: { username, password } } = req;

  User.find({ username }, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }

    if(data.length > 0) {
      res.status(400).send('User already exists');
      return;
    }

    User.create({ username, password }, (err, data) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }

      const { _id } = data;

      Person.create({ userId: _id }, (err, data) => {
        if (err) {
          res.status(500).send(err.message);
          return;
        }

        res.status(201).send(data);
      })
    })
  });
};
