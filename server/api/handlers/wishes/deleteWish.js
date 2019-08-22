const Wish = require("../../models/Wish");

/**
 * deleteWish
 *
 * DELETE: /api/v1/wish/{wishId}
 *
 * path:
 *   wishId {string} Wish id.
 *
 */
exports.handler = async function deleteWish(req, res) {
  const { params: { wishId: id } } = req;
  try {
    const wish = await Wish.findByIdAndRemove(id);
    await Wish.update({ next: id }, { next: wish.next });
    res.status(200).send(wish);
  } catch (e) {
    res.status(404).send(e.message);
  }
};
