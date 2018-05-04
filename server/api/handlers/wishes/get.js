import Wish from '../../models/Wish';

/**
 * get
 *
 * GET: /api/v1/wish/{wishId}
 *
 * path:
 *   wishId {string} Wish id.
 *
 */
exports.handler = function get(req, res) {
  const { params: { wishId: id }} = req;

  Wish.findById(id, (err, data) => {
    if (err) {
      res.status(404).send(err.message);
      return;
    }

    res.send(data);
  })
};
