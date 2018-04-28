/**
 * get
 *
 * GET: /api/v1/account/{id}
 * 
 * path:
 *   id {string}
 *   
 */
exports.handler = function get(req, res, next) {
  res.send('get')
  next()
}
