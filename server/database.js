import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose
  .connect('mongodb://localhost:27017/db', { useMongoClient: true })
  .then(() => {
    console.log('Connection has been established!');
  })
  .catch((err) => {
    console.log('Connection failed!', err);
  });
