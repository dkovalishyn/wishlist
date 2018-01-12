import Wish from '../models/Wish';

export function getWishes(req, res) {
  Wish.find({})
    .then(wishes => res.send(wishes))
    .catch(() => res.sendStatus(501));
}

export function addWish(req, res) {
  Wish.create(req.body)
    .then(wish => res.send(wish))
    .catch(() => res.sendStatus(501));
}
