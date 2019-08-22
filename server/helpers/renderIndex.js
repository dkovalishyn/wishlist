const path = require("path");

module.exports = (req, res, next) => {
  console.log("index");
  if (/\/[^.]*$/.test(req.url)) {
    res.sendFile(path.resolve(__dirname, "../public/index.html"));
  } else {
    next();
  }
};
