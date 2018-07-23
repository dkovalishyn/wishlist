import User from '../../models/User';

export function login(username, password, done) {
  console.log('login', username, password);
  User.findOne({ username }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (user.password !== password) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, user);
  });
}

export async function register(req, res, next) {
  try {
    const { body: { username, password } } = req;
    const user = await User.findOne({ username });
    if (user) {
      res.status(400).send('User already exists');
      return next();
    }

    await User.create({ username, password });
    next();
  } catch (e) {
    next(e);
  }
};

export function logout(req, res) {
  req.logout();
  res.status(200).json({ status: 'OK' });
}

export function authenticate(req, res, next) {
  console.log('authentication');
  if (req.isAuthenticated()) {
    return next();
  }

  if (req.headers['x-requested-with'] === 'XMLHttpRequest') {
    res.send('Authentication required', 401);
  } else {
    res.redirect('/login');
  }
}

export function serialize(user, done) {
  done(null, user._id);
}

export function deserialize(id, done) {
  User.findById(id, (err, user) => {
    if (err) {
      done(err);
    }
    if (!user) {
      done(err, false, 'User not found');
    }
    done(null, user);
  });
}
