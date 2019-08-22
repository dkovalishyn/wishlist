const User = require("../api/models/User");
const jwt = require("jsonwebtoken");
const uuid = require("uuid/v4");
const readFromConfig = require("../helpers/readFromConfig");
const mongoose = require("mongoose");

const secret = readFromConfig("SECRET_TOKEN");
const AUTHORIZATION = "Authorization";

const ACCESS_TOKEN_LIFETIME = 60 * 60;

const {
  Types: { ObjectId }
} = mongoose;

exports.verify = (token, done) => {
  if (!token) {
    done("No token provided.");
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return done(err);
    }

    User.findOne({ _id: decoded.sub }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      return done(null, user, { scope: "all" });
    });
  });
};

function calculateExp(lifetime) {
  return Math.floor(Date.now() / 1000 + lifetime);
}

function generateToken(userId, lifetime) {
  return jwt.sign(
    {
      sub: userId,
      exp: calculateExp(lifetime)
    },
    secret
  );
}

function updateTokens(user, res) {
  const refreshToken = generateRefreshToken();
  user.refreshToken = refreshToken;
  user.save();

  res.set({
    "Cache-Control": "no-store",
    Pragma: "no-cache"
  });
  res.status(200).json({
    token_type: "bearer",
    expires_in: calculateExp(ACCESS_TOKEN_LIFETIME),
    access_token: generateToken(user._id, ACCESS_TOKEN_LIFETIME),
    refresh_token: refreshToken
  });
}

function generateRefreshToken() {
  return uuid();
}

exports.auth = (req, res) => {
  const {
    body: { password, username }
  } = req;

  User.findOne({ username }, function(err, user) {
    if (err || !user || user.password !== password) {
      console.log(err);
      res.sendStatus(404);
      return;
    }

    updateTokens(user, res);
  });
};

exports.refreshToken = (req, res) => {
  const {
    body: { grant_type, refresh_token, access_token }
  } = req;
  if (grant_type !== "refresh_token") {
    console.error("Wrong grant_type");
    return res.sendStatus(400);
  }

  if (!refresh_token) {
    console.error("No token provided");
    return res.sendStatus(400);
  }

  if (!access_token) {
    console.error("access_token is not provided");
    return res.sendStatus(400);
  }

  const { sub } = jwt.decode(access_token);

  if (!sub) {
    console.error("access_token is corrupted");
    return res.sendStatus(400);
  }

  User.findById(ObjectId(sub), (err, user) => {
    if (err) {
      console.error(err.message);
      return res.sendStatus(500);
    }

    if (!user) {
      console.error("User not found");
      return res.sendStatus(404);
    }

    if (user.refreshToken !== refresh_token) {
      console.error("Refresh token is not valid");
      return res.sendStatus(401);
    }

    updateTokens(user, res);
  });
};

exports.logout = (req, res) => {
  User.findByIdAndUpdate(ObjectId(req.user._id), { refreshToken: "" }, err => {
    if (err) {
      console.error(err.message);
      return res.sendStatus(500);
    }

    req.logout();
    res.status(200).json({ status: "OK" });
  });
};
