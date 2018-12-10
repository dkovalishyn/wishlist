/**
 * generate
 *
 * GET: /api/v1/snapshot/generate
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
    return sizes.sort(Image.sortFunction)[0] || new Image();
  });
}

function resolve(url, src) {
  if (!src || typeof url !== 'string') {
    throw Error(`Wrong url provided: ${url}`);
  }

  const domain = url.match(/https?:\/\/.+?\//);
  return src.replace(/^\//, domain);
}

function crawlImages(url) {
  return makeRequest(url)
    .then(data => {
      const $ = cheerio.load(data);
      return $('img').toArray()
        .map(({ attribs: { src = '' } }) => resolve(url, src))
        .filter(link => !link.match(/logo|captcha|sprite/) || link.match(/^https?:/))
        .map(link => {
          console.log(link);
          return new Image(link.replace(/^\/\/www/, 'https://www'))
        });
    })

}

exports.handler = function generate(req, res) {
  const { query: { url }} = req;

  if (!url) {
    res.sendStatus(400);
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
