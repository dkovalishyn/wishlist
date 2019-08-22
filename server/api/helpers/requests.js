const https = require("https");
const http = require("http");
const fs = require("fs");
const sharp = require("sharp");

function errorHandler(err, cb) {
  console.warn(err);
  cb(err.message);
}

function chooseProtocol(url) {
  return url.match(/^http:/) ? http : https;
}

exports.isValidUrl = url => {
  return url ? Boolean(url.match(/^https?:/)) : false;
};

exports.makeRequest = url => {
  if (!isValidUrl(url)) {
    return Promise.reject(Error("You must provide url"));
  }
  return new Promise((resolve, reject) => {
    chooseProtocol(url).get(url, response => {
      let data = "";
      response.on("error", error => errorHandler(error, reject));
      response.on("data", chunk => (data += chunk.toString()));
      response.on("end", () => resolve(data));
    });
  });
};

exports.download = (url, path) => {
  return new Promise(res => {
    const stream = fs.createWriteStream(path);
    const transformer = sharp().resize(600);
    chooseProtocol(url).get(url, response => {
      response.pipe(transformer).pipe(stream);
      stream.on("finish", () => res(path));
    });
  });
};
