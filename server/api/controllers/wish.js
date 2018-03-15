import Wish from '../models/Wish';

export function getWishes(req, res) {
  Wish.find({}, (err, data) => {
    if (err) {
      res.sendStatus(501);
    }
    res.send(data)
  });
}

export function addWish(req, res) {
  Wish.create(req.body, (err) => {
    if (err) {
      res.sendStatus(501);
    }
    res.sendStatus(200)
  })
}
