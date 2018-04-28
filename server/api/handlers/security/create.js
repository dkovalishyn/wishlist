/**
 * create
 *
 * POST: /api/v1/account
 * 
 * body:
 *   name {string}
 *   lastName {string}
 *   
 */
exports.handler = function create(req, res, next) {
  res.send('create')
  next()
}
