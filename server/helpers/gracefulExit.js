const mongoose = require("mongoose");
const wss = require("../wss");

module.exports = e => {
  if (e.message) {
    console.warn(`Ooops.. ${e.message}`);
    console.warn(e);
  }
  console.log("Shutting down. Initiating clean up procedures..");
  wss.close();

  mongoose.connection.close(() => {
    console.log(
      "Mongoose default connection with DB: is disconnected through app termination"
    );
    process.exit(0);
  });
};
