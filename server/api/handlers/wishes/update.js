import Wish from '../../models/Wish';

/**
 * update
 *
 * PUT: /api/v1/wish/{wishId}
 *
 * path:
 *   wishId {string} Wish id.
 *
 * body:
 *   description {string}
 *
 */
exports.handler = function update(req, res) {
  const { body: wish, params: { wishId: id } } = req;

  const options = {};
  Wish.findByIdAndUpdate(id, wish, options, (err) => {
    if (err) {
      res.status(404).send(err.message);
      return;
    }

    res.send(wish);
  })
};
