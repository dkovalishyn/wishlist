'use strict';
import express from 'express';
import http from 'http';
import cors from 'cors';

import passport from 'passport';
import LocalStrategy from 'passport-local';
import BearerStrategy from 'passport-http-bearer';

import expressSession from 'express-session';
import cookieParser from 'cookie-parser';

import connectToDb from './database';
import swaggerRoutes from 'swagger-routes';
import swaggerConfig from './api/swagger/swagger';

import renderIndex from './helpers/renderIndex';

import gracefulExit from './helpers/gracefulExit';
import { authenticate, deserialize, login, serialize, logout } from './api/handlers/security/auth';
import { verify, auth } from './middlewares/bearer';


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
app.use(express.static('server/dist/public'));
app.use(express.json());
app.use(cookieParser());
app.use(expressSession({ secret: 'chao-cacao', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', auth);
app.get('/logout', logout);
//app.all('/api/v1/*', passport.authenticate('bearer'));

swaggerRoutes(app, {
  api: swaggerConfig,
  handlers: {
    path: './server/api/handlers',
    group: true,
  },
  authorizers: './server/api/handlers/security',
});

app.all('*', renderIndex);

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (err.name === 'TokenExpiredError') {
    return res.status(401).send('Token expired');
  }
  res.status(500).send('Something broke');
  next();
});

console.log('Starting server. Check http://localhost:10010');
connectToDb()
  .then(() => http.createServer(app).listen(process.env.PORT || 10010))
  .catch(error => console.error(error.stack));

process
  .on('SIGINT', gracefulExit)
  .on('uncaughtException', gracefulExit)
  .on('SIGTERM', gracefulExit);



