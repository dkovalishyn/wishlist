/**
 * generate
 *
 * GET: /api/v1/thumbnail/generate
 *
 * query:
 *   url {string} Web site where thumbnail is looked up.
 *
 */
import cheerio from 'cheerio';
import fs from 'fs';

import Image from '../../models/Image';
import { makeRequest } from '../../helpers/requests';

function getSizes(images) {
  return Promise.all(images.map((image) => image.probe()));
}

function findBiggest(images) {
  return getSizes(images).then(sizes => {
    console.log(sizes.sort(Image.sortFunction));
    return sizes.sort(Image.sortFunction)[0]
  });
}

function crawlImages(url) {
  return makeRequest(url)
    .then(data => {
      const $ = cheerio.load(data);
      return $('img').toArray()
        .map(({ attribs: { src = '' } }) => src)
        .filter(link => !link.match(/logo|captcha|sprite/) || link.match(/^https?:/))
        .map(link => new Image(link.replace(/^\/\/www/, 'https://www')));
    })

}

exports.handler = function generate(req, res) {
  const url = req.swagger.params.url.value;

  if (!url) {
    res.sendStatus(500);
  }

  crawlImages(url)
    .then(findBiggest)
    .then(image => image.fetch())
    .then(image => {
      const reader = fs.createReadStream(image.path);
      res.setHeader("Content-Type", image.mime);
      reader.pipe(res);
    })
    .catch(e => {
      console.warn(e);
      res.sendStatus(500)
    });
};
