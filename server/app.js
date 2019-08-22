'use strict';
const express = require( 'express');
const http = require( 'http');
const cors = require( 'cors');

const passport = require( 'passport');
const LocalStrategy = require( 'passport-local');
const BearerStrategy = require( 'passport-http-bearer');

const expressSession = require( 'express-session');
const cookieParser = require( 'cookie-parser');

const swaggerRoutes = require( 'swagger-routes');
const connectToDb = require( './database');
const swaggerConfig = require( './api/swagger/swagger');

const renderIndex = require( './helpers/renderIndex');

const gracefulExit = require( './helpers/gracefulExit');
const { register, deserialize, login, serialize } = require( './api/handlers/security/auth');
const { verify, auth, refreshToken, logout } = require( './middlewares/bearer');

const wss = require( './wss');

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

passport.use(new LocalStrategy(login));
passport.use(new BearerStrategy(verify));
passport.serializeUser(serialize);
passport.deserializeUser(deserialize);

const app = express();

app.use(cors(corsOptions));
app.use(express.static('server/public/'));
app.use(express.json());
app.use(cookieParser());
app.use(expressSession({ secret: 'chao-cacao', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.post('/login', auth);
app.get('/logout', logout);
app.post('/token', refreshToken);
app.post('/register', register, auth);
app.all('/api/*', passport.authenticate('bearer'), (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
});

swaggerRoutes(app, {
  api: swaggerConfig,
  handlers: {
    path: './server/api/handlers',
    group: true,
  },
  authorizers: './server/api/handlers/security',
});

app.all(/^\/(?!api).*/, renderIndex);

app.use(function (err, req, res, next) {
  console.error(err.message);

  if (res.headersSent) {
    return next(err);
  }

  if (err.name === 'TokenExpiredError') {
    return res.status(401).send('Token expired');
  }

  res.status(500).send('Something broke');
});

console.log('Starting server. Check http://localhost:10010');
connectToDb()
  .then(() => {
      const server = http.createServer(app).listen(process.env.PORT || 10010);
      wss.connect(server);
  })
  .catch(error => console.error(error.stack));

process
  .on('SIGINT', gracefulExit)
  .on('uncaughtException', gracefulExit)
  .on('SIGTERM', gracefulExit);



