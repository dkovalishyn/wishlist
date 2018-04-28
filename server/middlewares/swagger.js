import { prop } from 'ramda';
import path from 'path';
import express from 'express';
import sway from 'sway';
import swaggerConfig from '../api/swagger/swagger';

const DEFINITION_KEY = 'definitionFullyResolved';
const CONTROLLER_KEY = 'x-swagger-router-controller';
const OPERATION_KEY = 'operationId';

const getDefinition = prop(DEFINITION_KEY);

const logValidationErrors = (req, res, next) => {
  if (!req.swagger) {
    return next();
  }

  const { swagger: { validation: { errors, warnings } } } = req;
  if (errors.length > 0) {
    errors.forEach(console.error);
    res.status(500).send('Something broke!');
    return next('route');
  }

  if (warnings.length > 0) {
    warnings.forEach(console.warn);
  }

  return next();
};

const validate = validationErrors => (req, res, next) => {
  const { errors, warnings } = validationErrors;
  req.swagger = {
    ...req.swagger,
    validation: {
      errors,
      warnings,
    },
  };

  if (errors.length > 0) {
    return next('route');
  }

  return next();
};

const validateApi = (req, res, next) => {
  const { swagger: { api } } = req;
  validate(api.validate())(req, res, next);
};

const validateRequest = (req, res, next) => {
  const { swagger: { api } } = req;
  validate(api.getOperation(req).validateRequest(req))(req, res, next);
};

const parse = (req, res, next) => {
  const { swagger: { api } } = req;
  const operation = api.getOperation(req);
  const params = operation.getParameters().reduce((acc, param) => {
    const { raw: value } = param.getValue(req);
    const { name } = param;
    return { ...acc, [name]: { value }, };
  }, {});

  req.swagger = {
    ...req.swagger,
    params,
    operation,
  };

  next();
};

const resolve = (req, res) => {
  const { swagger: { operation, api } } = req;
  const swaggerPath = api.getPath(req);
  const { [CONTROLLER_KEY]: swaggerController } = getDefinition(swaggerPath);
  const { [OPERATION_KEY]: operationId } = getDefinition(operation);

  const controllerPath = path.resolve(__dirname, `../api/controllers/${swaggerController}`);
  const controller = require(controllerPath);

  if (controller && controller[operationId]) {
    controller[operationId](req, res);
  } else {
    res.status(500).send('There is no such action!');
  }
};

const init = api => (req, res, next) => {
  console.log('init', req.url);
  req.swagger = {
    api,
    validation: {
      errors: [],
      warnings: [],
    }
 };
  next();
};

const createRouter = api => {
  const swaggerApp = express.Router({ mergeParams: true });
  swaggerApp.use(init(api));
  swaggerApp.use(
    validateApi,
    parse,
    validateRequest,
    resolve,
  );
  swaggerApp.use(logValidationErrors);

  return swaggerApp;
};

export default () => sway
.create({ definition: swaggerConfig })
.then(api => createRouter(api));
