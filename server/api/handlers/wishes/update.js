import Wish from '../../models/Wish';
import { fetchImage } from './helpers';

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
exports.handler = async function update(req, res) {
  const { body, params: { wishId: id } } = req;

  try {
    const imagePath = await fetchImage(body.imageUrl);
    const update = {...body, imagePath};
    if (!imagePath) delete update.imagePath;
    const options = {
      new: true,
    };
    const wish = await Wish.findByIdAndUpdate(id, update, options);
    res.send(wish);
  } catch (e) {
    res.status(404).send(e.message);
  }
};
