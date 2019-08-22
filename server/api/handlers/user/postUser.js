const Person = require("../../models/Person");

/**
 * postUser
 *
 * POST: /api/v1/user
 *
 * body:
 *   name {string}
 *   lastName {string}
 *
 */
exports.handler = function postUser(req, res) {
  const { body: userData } = req;
  Person.create({ userData }, err => {
    if (err) {
      res.status(404).send(err.message);
      return;
    }

    res.status(201).send(userData);
  });
};
