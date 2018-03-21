import Wish from '../models/Wish';

export function getWishes(req, res) {
  Wish.find({}, (err, data) => {
    if (err) {
      res.sendStatus(501);
    }
    res.send(data)
  });
}

export function getWishById(req, res) {
  Wish.findById(req.swagger.params.wishId.value, (err, data) => {
    if (err) {
      res.sendStatus(501);
    }

    console.log(data);
    res.send(data);
  })
}

export function addWish(req, res) {
  Wish.create(req.body, (err) => {
    if (err) {
      res.sendStatus(501);
    }
    res.sendStatus(200)
  })
}

