import Wish from '../../models/Wish';

/**
 * deleteWish
 *
 * DELETE: /api/v1/wish/{wishId}
 *
 * path:
 *   wishId {string} Wish id.
 *
 */
exports.handler = function deleteWish(req, res) {
  const { params: { wishId: id } } = req;

  Wish.findByIdAndRemove(id, (err, data) => {
    if (err) {
      res.status(404).send(err.message);
      return;
    }

    res.send(data);
  });
};
