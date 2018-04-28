import mongoose from 'mongoose';

export default (e) => {
  if (e) {
    console.log(`Ooops.. ${e.message}`);
  }
  console.log('Shutting down. Initiating clean up procedures..');

  mongoose.connection.close(() => {
    console.log('Mongoose default connection with DB: is disconnected through app termination');
    process.exit(0);
  });
};
