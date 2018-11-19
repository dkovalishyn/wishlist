/**
 * refreshToken
 *
 * POST: /api/v1/token
 * 
 * body:
 *   grant_type {string}
 *   refresh_token {string}
 *   
 */
exports.handler = function refreshToken(req, res, next) {
  res.send('refreshToken')
  next()
}
