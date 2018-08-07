import mongoose from 'mongoose';
import wss from '../wss';

export default (e) => {
  if (e.message) {
    console.warn(`Ooops.. ${e.message}`);
    console.warn(e);
  }
  console.log('Shutting down. Initiating clean up procedures..');
  wss.close();

  mongoose.connection.close(() => {
    console.log('Mongoose default connection with DB: is disconnected through app termination');
    process.exit(0);
  });
};
