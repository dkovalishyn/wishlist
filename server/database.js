import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017/db')
  .then(() => {
    console.log('Connection has been established!');
  })
  .catch((err) => {
    console.log('Connection failed!', err);
  });
