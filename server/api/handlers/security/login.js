import User from '../../models/User';

/**
 * login
 *
 * POST: /api/v1/login
 *
 * body:
 *   username {string}
 *   password {string}
 *
 */
exports.handler = function login(req, res) {
  const { body: { username, password } } = req;
  console.log('login', req.body);
  User.findOne({ username }, (err, user) => {
    if (err || !user || (user.password !== password)) {
      res.send({ error: 'Incorrect username or password' });
      return;
    }

    res.status(200).send({ message: 'Successfully logged in' });
  });
};
