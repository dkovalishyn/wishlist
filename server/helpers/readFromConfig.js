const path = require("path");
const dotenv = require("dotenv");

const result = dotenv.config({
  path: path.resolve(__dirname, "../config/.env")
});

const config = result.error ? process.env : result.parsed;

module.exports = key => config[key];
