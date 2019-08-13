const path = require('path');
const multer = require('multer');
const mime = require('mime-types');

module.exports = multer.diskStorage({
    destination: function (req, file, cb) {
        const dest = path.resolve(__dirname, '../dist/public/assets');
        cb(null, dest)
    },
    filename: function (req, file, cb) {
        const filename = `${file.fieldname}-${Date.now()}.${mime.extension(file.mimetype)}`;
        cb(null, filename)
    }
});
