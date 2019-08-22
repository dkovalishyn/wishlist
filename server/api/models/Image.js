const path = require("path");
const probe = require("probe-image-size");
const crypto = require("crypto");
const { download, isValidUrl } = require("../helpers/requests");

class Image {
  path;

  static basePath = "/assets/images";
  static assetsPath = path.resolve(
    __dirname,
    `../../dist/public${Image.basePath}`
  );
  static defaultPath = path.join(Image.assetsPath, "gift.jpeg");

  constructor(url) {
    this.url = isValidUrl(url) ? url : null;
    this.width = 225;
    this.height = 225;
    this.type = "jpeg";
    this.mime = "image/jpeg";
    this.isFetched = false;
    this.isProbed = false;
  }

  async fetch() {
    try {
      if (!this.url || this.isFetched) {
        this.path = Image.defaultPath;
        this.isFetched = true;
        return this;
      }

      this.path = path.join(Image.assetsPath, this.generateName());
      await this.probe();
      await download(this.url, this.path);
      return this;
    } catch (e) {
      await fs.unlink(path);
      this.path = Image.defaultPath;
      return this;
    }
  }
  generateName() {
    return `${crypto.randomBytes(16).toString("hex")}.${this.type}`;
  }

  probe() {
    if (!this.url || this.isProbed) {
      return this;
    }

    return probe(this.url)
      .then(({ width, height, type, mime }) => {
        this.width = width;
        this.height = height;
        this.type = type;
        this.mime = mime;
        this.isProbed = true;
        return this;
      })
      .catch(() => {
        this.url = null;
        this.isProbed = true;
      });
  }

  getResolution() {
    return this.width * this.height;
  }

  static sortFunction(a, b) {
    if (!a.url) {
      return 1;
    }

    if (!b.url) {
      return -1;
    }

    return b.getResolution() - a.getResolution();
  }
}

module.exports = Image;
