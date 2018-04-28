import Wish from '../../models/Wish';

/**
 * getAll
 *
 * GET: /api/v1/wish
 *
 */
exports.handler = function getAll(req, res) {
  Wish.find({}, (err, data) => {
    if (err) {
      res.sendStatus(501);
    }

    res.send(data)
  });
};
