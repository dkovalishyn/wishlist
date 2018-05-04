import mongoose from 'mongoose';

import readFromConfig from './helpers/readFromConfig';

const dbUser = readFromConfig('MONGODB_USERNAME');
const dbPass = readFromConfig('MONGODB_PASSWORD');
const dbUrl = `mongodb://${dbUser}:${dbPass}@ds117749.mlab.com:17749/heroku_1vg6b4fw`;

export default () => {
  console.log(`Connecting to db ...`);
  return mongoose.connect(dbUrl)
    .then(() => {
      console.log('Connection has been established!');
    })
    .catch((err) => {
      console.log('Connection failed!', err);
    });
}
