/**
 * add
 *
 * POST: /api/v1/wish
 *
 * body:
 *   description {string}
 *
 */
import Wish from "../../models/Wish";
import { getImagePath } from "./helpers";

exports.handler = async function add(req, res) {
  try {
    const { body } = req;
    const wishCount = await Wish.countDocuments();
    const wish = await Wish.create({
      ...body,
      user: req.user._id,
      order: wishCount + 1
    });
    res.status(201).send(wish);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
