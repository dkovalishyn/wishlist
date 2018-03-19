'use strict';

import SwaggerExpress from 'swagger-express-mw';
import express from 'express';
import cors from 'cors';

import gracefulExit from './helpers/gracefulExit';
import './database';

const corsOptions = {
  origin: 'http://localhost:10010',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.use(express.json());
app.use(express.static('server/public'));
app.use(cors(corsOptions));
module.exports = app; // for testing

const config = {
  appRoot: __dirname,
  configDir: __dirname + '/config'
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  const port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/api/v1/hello?name=Scott');
  }
});

process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
