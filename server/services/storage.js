const path = require("path");
const fs = require("fs");
const multer = require("multer");
const mime = require("mime-types");

exports.DESTINATIONS = {
  temporary: "tmp",
  wish: "wish",
  avatar: "avatar"
};

const ASSETS_PATH = "assets";

exports.createStorage = (dest = DESTINATIONS.temporary) =>
  multer.diskStorage({
    destination: path.resolve(__dirname, "../public", ASSETS_PATH, dest),
    filename: function(req, file, cb) {
      const extension = mime.extension(file.mimetype);
      const generatedName = `${file.fieldname}-${Date.now()}`;
      cb(null, `${generatedName}.${extension}`);
    }
  });
