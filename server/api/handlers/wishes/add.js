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
import { getImagePath } from './helpers';

exports.handler = async function add(req, res) {
  try {
    const { body } = req;
    const wishCount = await Wish.count();
    const imagePath = await getImagePath(body);
    const wish = await Wish.create({
      ...body,
      imagePath,
      order: wishCount + 1,
    });
    res.status(201).send(wish);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
