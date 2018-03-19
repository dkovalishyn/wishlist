import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const result = dotenv.config({
  path: path.join(__dirname, '.env'),
});

const config = result.error ? process.env : result.parsed;
const { MONGODB_USERNAME: dbUser, MONGODB_PASSWORD: dbPass } = config;
const dbUrl = `mongodb://${dbUser}:${dbPass}@ds117749.mlab.com:17749/heroku_1vg6b4fw`;

console.log(`Connecting to db ...`);
mongoose.connect(dbUrl)
  .then(() => {
    console.log('Connection has been established!');
  })
  .catch((err) => {
    console.log('Connection failed!', err);
  });
