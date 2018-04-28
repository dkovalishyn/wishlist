/**
 * add
 *
 * POST: /api/v1/wish
 *
 * body:
 *   description {string}
 *
 */
import Wish from '../../models/Wish';

exports.handler = function add(req, res) {
  const { body: wish } = req;
  Wish.create(wish, (err) => {
    if (err) {
      res.sendStatus(501);
    }
    res.send(wish);
  })
};
