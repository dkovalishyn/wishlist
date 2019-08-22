const Wish = require("../../models/Wish");

/**
 * getAll
 *
 * GET: /api/v1/wish
 *
 */
exports.handler = function getAll(req, res) {
  Wish.find(
    { user: req.user._id },
    null,
    { sort: { order: 1 } },
    (err, data) => {
      if (err) {
        res.sendStatus(501);
      }

      res.send(data);
    }
  );
};
