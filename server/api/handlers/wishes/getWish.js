const Wish = require("../../models/Wish");

/**
 * getWish
 *
 * GET: /api/v1/wish/{wishId}
 *
 * path:
 *   wishId {string} Wish id.
 *
 */
exports.handler = function getWish(req, res, next) {
  const { params: { wishId: id } } = req;

  Wish.findById(id, (err, data) => {
    if (err) {
      res.status(404).send(err.message);
      return;
    }

    res.send(data);
  })
};
