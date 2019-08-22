/**
 * hello
 *
 * GET: /api/v1/hello
 *
 * query:
 *   name {string} The name of the person to whom to say hello.
 *
 */
exports.handler = function hello(req, res, next) {
  res.send("hello");
  next();
};
