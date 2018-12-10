import Image from '../../models/Image';
import path from "path";

export const fetchImage = url => {
  const basePath = '/assets/images';
  if (!url) {
    return Promise.resolve(`${basePath}/gift.jpeg`);
  }

  const image = new Image(url);
  return image
    .fetch()
    .then(image => `${basePath}/${path.parse(image.path).base}`);
};
