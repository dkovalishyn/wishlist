import path from 'path';
import probe from 'probe-image-size';
import crypto from 'crypto';
import { download, isValidUrl } from '../helpers/requests';

class Image {
  constructor(url) {
    this.url = isValidUrl(url) ? url : null;
    this.width = 505;
    this.height = 640;
    this.type = 'png';
    this.mime = 'image/png';
    this.isFetched = false;
    this.isProbed = false;
  }

  fetch() {
    const assetsPath = path.resolve(__dirname, '../../public/assets/');
    if (!this.url || this.isFetched) {
      this.path = path.join(assetsPath, 'gift.png');
      this.isFetched = true;
      return this;
    }

    this.path = path.join(assetsPath, this.generateName());

    return download(this.url, this.path).then(() => this);
  }

  generateName() {
    return `${crypto.randomBytes(16).toString('hex')}.${this.type}`;
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

export default Image;

