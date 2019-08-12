import Wish from "../../models/Wish";
import { getImagePath } from "./helpers";

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
  const {
    body,
    params: { wishId: id }
  } = req;

  try {
    const wish = await Wish.findByIdAndUpdate(id, body, {
      omitUndefined: false
    });
    res.send(wish);
  } catch (e) {
    res.status(404).send(e.message);
  }
};
