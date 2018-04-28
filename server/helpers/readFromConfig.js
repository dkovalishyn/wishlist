import path from 'path';
import dotenv from 'dotenv';

const result = dotenv.config({
  path: path.resolve(__dirname, '../config/.env'),
});

const config = result.error ? process.env : result.parsed;

export default (key) => config[key];
