const path = require("path");
const Image = require("../../models/Image");
const Wish = require("../../models/Wish");

export const getImagePath = body =>
  Wish.findOne({ imageUrl: body.imageUrl })
    .then(wish =>
      wish
        ? wish.imagePath
        : new Image(body.imageUrl).fetch().then(image => image.path)
    )
    .then(imagePath => `${Image.basePath}/${path.parse(imagePath).base}`);
