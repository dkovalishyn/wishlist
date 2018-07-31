import User from '../api/models/User';
import Person from '../api/models/Person';
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

    User.findOne({ _id: decoded.sub }, function (err, user) {
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
  console.log('auth', username, password);

  User.findOne({ username }, function (err, user) {
    if (err || !user || user.password !== password) {
      console.log(err);
      res.sendStatus(404);
      return;
    }

    const exp = Math.floor(Date.now() / 1000 + (60 * 60));
    const payload = { sub: user._id, exp };
    const token = jwt.sign(payload, secret);

    Person.findOne({ userId: user._id }, (err, profile) => {
      if(err) {
        console.error(err);
        res.sendStatus(500);
        return;
      }

      res.status(200).json({ token, exp, profile })
    })
  });
}
