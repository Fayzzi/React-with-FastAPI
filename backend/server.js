const app = require("./app");
const mongoose = require("mongoose");

process.on("uncaughtException", () => {});

//server
const server = app.listen(3000, () => {
  console.log("App is running on:3000");
});
//mongodb
mongoose.connect(process.env.MONGOOSE).then((data) => {
  console.log(`Connected to database:${data.connection.host}`);
});
//unhandled Rejection
process.on("unhandledRejection", (err) => {
  console.log("Unhandeled rejection:", err.message);

  server.close(() => {
    process.exit(1);
  });
});
