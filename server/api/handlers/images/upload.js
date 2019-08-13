/**
 * upload
 *
 * POST: /api/v1/image/upload
 *
 */
const multer = require("multer");
const storage = require("../../../services/storage");

exports.handler = function upload(req, res, next) {
  const { file: { size, filename } } = req;

  if (!size) {
    res.status(400).send("File was not created");
    return;
  }

  res.status(201).send(filename);
  next();
};

exports.middleware = multer({ storage }).single("upFile");
