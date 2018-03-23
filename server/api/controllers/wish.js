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

    res.send(data);
  })
}

export function deleteWish(req, res) {
  const id = req.swagger.params.wishId.value;

  Wish.findByIdAndRemove(id, (err, data) => {
    if (err) {
      res.sendStatus(501);
    }

    console.log(data);
    res.send(data);
  });
}

export function addWish(req, res) {
  const wish = req.swagger.params.wish.value;
  Wish.create(wish, (err) => {
    if (err) {
      res.sendStatus(501);
    }
    res.send(wish);
  })
}

export function updateWish(req, res) {
  const wish = req.swagger.params.wish.value;
  const id = req.swagger.params.wishId.value;
  const options = {};
  Wish.findByIdAndUpdate(id, wish, options, (err) => {
    if (err) {
      res.sendStatus(501);
    }
    res.send(wish);
  })
}

