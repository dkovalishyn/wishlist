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

exports.handler = async function add(req, res) {
  try {
    const { body } = req;
    const wishCount = await Wish.count();
    const wish = await Wish.create({ ...body, order: wishCount + 1 });
    res.status(201).send(wish);
  } catch (err) {
    res.status(404).send(err.message);
  }
};
