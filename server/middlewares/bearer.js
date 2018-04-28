import User from '../api/models/User';
import jwt from 'jsonwebtoken';
import readFromConfig from '../helpers/readFromConfig';

const secret = readFromConfig('SECRET_TOKEN');
const AUTHORIZATION = 'Authorization';

export function verify(token, done) {
  if (!token) {
    done('No token provided.');
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return done(err);
    }

    User.findOne({ id: decoded.sub }, function (err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      return done(null, user, { scope: 'all' });
    });
  });
}

export function auth(req, res) {
  const { body: { password, username } } = req;
  console.log('auth', password, username);

  User.findOne({ username }, function (err, user) {
    if (err || !user || user.password !== password) {
      res.sendStatus(401);
    } else {
      const payload = { sub: user.id };
      const token = jwt.sign(payload, secret, { expiresIn: 20 });
      res.set(AUTHORIZATION, `Bearer ${token}`);
      res.status(200).send('Successfully authorized');
    }
  });
}
