/**
 * upload
 *
 * POST: /api/v1/image/upload
 *
 */
const multer = require("multer");
const { createStorage, DESTINATIONS } = require("../../../services/storage");

exports.handler = function upload(req, res, next) {
  const {
    file: { size, filename }
  } = req;

  if (!size) {
    res.status(400).send("File was not created");
    return;
  }

  res
    .status(201)
    .json({ path: `assets/${DESTINATIONS.temporary}/${filename}` });
  next();
};

exports.middleware = multer({
  storage: createStorage(DESTINATIONS.temporary)
}).single("upFile");
