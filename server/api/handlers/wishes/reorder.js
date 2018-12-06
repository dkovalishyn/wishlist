import Wish from '../../models/Wish';
import { map, prop, move } from 'ramda';

/**
 * reorder
 *
 * POST: /api/v1/wish/reorder
 *
 */

exports.handler = async function reorder(req, res, next) {
  try {
    const { body: { prevOrder, nextOrder } } = req;
    const wishes = await Wish.find({}, null, { sort: { order: 1 } });
    const updates = move(prevOrder, nextOrder, wishes)
      .slice(prevOrder)
      .map((wish, i) => {
        return {
          updateOne: {
            filter: { _id: wish._id },
            update: { order: i + prevOrder },
          },
        };
      });
    await Wish.bulkWrite(updates);
    res.status(200).send({});
    next();
  } catch (e) {
    res.status(404).send(e.message);
  }
};
