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
      res.status(404).send(err.message);
      return;
    }

    res.send(wish);
  })
};
