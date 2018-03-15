import https from 'https';
import http from 'http';
import fs from 'fs';

function errorHandler (err, cb) {
  console.warn(err);
  cb();
}

function chooseProtocol(url) {
  return url.match(/^http:/) ? http : https;
}

export function isValidUrl(url) {
  return Boolean(url.match(/^https?:/));
}

export function makeRequest(url) {
  if (!url && isValidUrl(url)) {
    return Promise.reject(Error('You must provide url'));
  }

  return new Promise((res, rej) => {
    chooseProtocol(url).get(url, response => {
      let data = '';
      response.on('error', error => errorHandler(error, rej));
      response.on('data', chunk => { data += chunk.toString(); });
      response.on('end', () => res(data));
    });
  });
}

export function download(url, path) {
  return new Promise(res => {
    const stream = fs.createWriteStream(path);
    chooseProtocol(url).get(url, (response) => {
      response.pipe(stream);
      stream.on('finish', () => { res(path);})
    });
  });
}
