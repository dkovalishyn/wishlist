export default () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection with DB: is disconnected through app termination');
    process.exit(0);
  });
};
